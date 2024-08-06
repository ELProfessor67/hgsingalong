import { NextResponse } from 'next/server';
import { APIContracts, APIControllers,Constants as SDKConstants } from 'authorizenet';
import subscriptionModel from '@/lib/userModel';

export const POST = async (req) => {
    try {
        const { cardNumber, expiryMonth, expiryYear, cvv, email, firstName, user_id, amount, plan } = await req.json();
        const constants = {
            apiLoginKey: process.env.AUTHORIZENET_API_LOGIN_ID, // Your Authorize.Net API Login ID
            transactionKey: process.env.AUTHORIZENET_TRANSACTION_KEY, // Your Authorize.Net Transaction Key
        };

        

        const merchantAuthenticationType = new APIContracts.MerchantAuthenticationType();
        merchantAuthenticationType.setName(constants.apiLoginKey);
        merchantAuthenticationType.setTransactionKey(constants.transactionKey);

        const creditCard = new APIContracts.CreditCardType();
        creditCard.setCardNumber(cardNumber);
        creditCard.setExpirationDate(`${expiryMonth}-${expiryYear}`);
        creditCard.setCardCode(cvv);

        const paymentType = new APIContracts.PaymentType();
        paymentType.setCreditCard(creditCard);

        const transactionSetting = new APIContracts.SettingType();
        transactionSetting.setSettingName('recurringBilling');
        transactionSetting.setSettingValue('false');

        const transactionSettingList = [transactionSetting];
        
        const transactionSettings = new APIContracts.ArrayOfSetting();
        transactionSettings.setSetting(transactionSettingList);

        const transactionRequestType = new APIContracts.TransactionRequestType();
        transactionRequestType.setTransactionType(APIContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION);
        transactionRequestType.setPayment(paymentType);
        transactionRequestType.setAmount(amount);
        transactionRequestType.setTransactionSettings(transactionSettings);

        const createRequest = new APIContracts.CreateTransactionRequest();
        createRequest.setMerchantAuthentication(merchantAuthenticationType);
        createRequest.setTransactionRequest(transactionRequestType);

        const ctrl = new APIControllers.CreateTransactionController(createRequest.getJSON());
        ctrl.setEnvironment(SDKConstants.endpoint.sandbox);

        const response = await new Promise((resolve, reject) => {
            ctrl.execute(() => {
                const apiResponse = ctrl.getResponse();
                const response = new APIContracts.CreateTransactionResponse(apiResponse);

                if (response !== null) {
                    if (response.getMessages().getResultCode() === APIContracts.MessageTypeEnum.OK) {
                        if (response.getTransactionResponse() && response.getTransactionResponse().getMessages() !== null) {
                            console.log('Successfully created transaction with Transaction ID: ' + response.getTransactionResponse().getTransId());
                            console.log('Response Code: ' + response.getTransactionResponse().getResponseCode());
                            console.log('Message Code: ' + response.getTransactionResponse().getMessages().getMessage()[0].getCode());
                            console.log('Description: ' + response.getTransactionResponse().getMessages().getMessage()[0].getDescription());
                            resolve({ success: true, transactionId: response.getTransactionResponse().getTransId() });
                        } else {
                            console.log('Failed Transaction.');
                            if(response.getTransactionResponse().getErrors() != null) {
                                console.log('Error Code: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorCode());
                                console.log('Error message: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorText());
                                reject({ success: false, error: response.getTransactionResponse().getErrors().getError()[0].getErrorText() });
                            }
                        }
                    } else {
                        console.log('Failed Transaction.');
                        if (response.getTransactionResponse() && response.getTransactionResponse().getErrors() !== null) {
                            console.log('Error Code: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorCode());
                            console.log('Error message: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorText());
                            reject({ success: false, error: response.getTransactionResponse().getErrors().getError()[0].getErrorText() });
                        } else {
                            console.log('Error Code: ' + response.getMessages().getMessage()[0].getCode());
                            console.log('Error message: ' + response.getMessages().getMessage()[0].getText());
                            reject({ success: false, error: response.getMessages().getMessage()[0].getText() });
                        }
                    }
                } else {
                    reject({ success: false, error: 'No response.' });
                }
            });
        });


        if(response.success){
            const subscription_expire = new Date(Date.now() + (30 * 24 * 60 * 60 * 1000))
            const user = await subscriptionModel.findOne({user_id})
           
            if(user){
              user.subscription = plan;
              user.subscribe_start = new Date(Date.now());
              user.subscription_expire = subscription_expire;
              await user.save();
            }else{
               await subscriptionModel.create({user_id,subscription:plan,subscribe_start: new Date(Date.now()), subscription_expire})
            }

            return NextResponse.json(response);
        }else{
            return NextResponse.json(response,{status: 501});
        }

        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
};
