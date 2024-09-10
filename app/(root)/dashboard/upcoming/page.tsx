import CallList from '@/components/CallList';
import CallListUpcoming from '@/components/CallListUpcoming';

const UpcomingPage = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold text-gradient">Upcoming Meeting</h1>

      <CallListUpcoming />
    </section>
  );
};

export default UpcomingPage;
