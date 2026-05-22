import NetworkBackground from '@/components/NetworkBackground';
import EventRegistrationForm from '@/components/EventRegistrationForm';

export default function EventRegisterPage() {
  return (
    <>
      <NetworkBackground />
      <main className="page-spacing container" style={{ maxWidth: '860px', paddingTop: '24px' }}>
        <EventRegistrationForm />
      </main>
    </>
  );
}
