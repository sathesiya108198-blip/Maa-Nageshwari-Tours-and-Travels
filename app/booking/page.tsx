import { Suspense } from "react";
import BookingForm from "../../components/BookingForm";

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="page-shell"><p>Loading booking details…</p></div>}>
      <BookingForm />
    </Suspense>
  );
}
