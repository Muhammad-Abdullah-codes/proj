import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Calendar,
  Clock,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  ArrowLeft,
  User,
  Mail,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";

// Dynamic Time Slot Generator based on the selected date
const generateTimeSlots = (date: Date | null) => {
  if (!date) return [];
  const day = date.getDate();

  // Create some realistic variation in schedule availability based on the day of the month
  if (day % 3 === 0) return ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];
  if (day % 2 === 0) return ["10:00 AM", "01:00 PM", "03:30 PM"];
  return ["09:30 AM", "12:00 PM", "01:30 PM", "05:00 PM"];
};

export default function MeetingScheduler() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Form State (To be sent to backend)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  // Calendar State
  const [currentMonth, setCurrentMonth] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  );

  const pageVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  // Calendar Helper Functions
  const nextMonth = () =>
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1),
    );
  const prevMonth = () =>
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1),
    );

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0,
  ).getDate();
  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1,
  ).getDay();

  const isPast = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isWeekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6;
  const isSameDay = (d1: Date | null, d2: Date) =>
    d1 && d1.toDateString() === d2.toDateString();

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // --- BACKEND INTEGRATION PREP ---
    // Tomorrow, we will replace this timeout with an actual fetch request:
    // await fetch('/api/book-meeting', {
    //   method: 'POST',
    //   body: JSON.stringify({ ...formData, date: selectedDate, time: selectedTime })
    // });
    // The backend will save to PostgreSQL and trigger the confirmation email via Resend/SendGrid.

    // Simulating network request for now
    setTimeout(() => {
      setStep(3);
    }, 500);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 flex items-center justify-center">
      <div className="max-w-5xl w-full mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Schedule a{" "}
            <span className="text-blue-600 dark:text-blue-500">
              Discovery Call
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Select a time to discuss your project requirements with our
            engineering team.
          </p>
        </div>

        {/* Multi-Step Widget Container */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl shadow-blue-500/5 border border-gray-200 dark:border-gray-800 overflow-hidden min-h-\[500px\] relative">
          <AnimatePresence mode="wait">
            {/* STEP 1: Full Calendar & Time Selection */}
            {step === 1 && (
              <motion.div
                key="step1"
                variants={pageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="p-8 md:p-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Calendar Column */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
                        <Calendar
                          size={20}
                          className="text-blue-600 dark:text-blue-500"
                        />
                        Select a Date
                      </h3>
                      <div className="flex gap-2">
                        <button
                          onClick={prevMonth}
                          className="p-1.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
                        >
                          <ChevronLeft size={18} />
                        </button>
                        <button
                          onClick={nextMonth}
                          className="p-1.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
                        >
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Calendar Grid */}
                    <div className="border border-gray-100 dark:border-gray-800 rounded-2xl p-4 bg-gray-50/50 dark:bg-gray-950/50">
                      <div className="text-center font-bold text-gray-900 dark:text-white mb-4">
                        {currentMonth.toLocaleString("default", {
                          month: "long",
                          year: "numeric",
                        })}
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center mb-2">
                        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                          (day) => (
                            <div
                              key={day}
                              className="text-xs font-bold text-gray-400 dark:text-gray-500 py-2"
                            >
                              {day}
                            </div>
                          ),
                        )}
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {/* Empty offset days */}
                        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                          <div key={`empty-${i}`} />
                        ))}

                        {/* Actual days */}
                        {Array.from({ length: daysInMonth }).map((_, i) => {
                          const date = new Date(
                            currentMonth.getFullYear(),
                            currentMonth.getMonth(),
                            i + 1,
                          );
                          const disabled = isPast(date) || isWeekend(date);
                          const selected = isSameDay(selectedDate, date);

                          return (
                            <button
                              key={i}
                              disabled={disabled}
                              onClick={() => {
                                setSelectedDate(date);
                                setSelectedTime(null);
                              }}
                              className={`
                                aspect-square rounded-xl flex items-center justify-center text-sm font-semibold transition-all
                                ${disabled ? "text-gray-300 dark:text-gray-700 cursor-not-allowed" : "hover:border-blue-300 hover:text-blue-600 dark:hover:text-blue-400 border border-transparent"}
                                ${selected ? "bg-blue-600 text-white shadow-md hover:text-white hover:border-blue-600" : !disabled && "text-gray-700 dark:text-gray-300"}
                              `}
                            >
                              {i + 1}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Time Slots Column */}
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-6">
                      <Clock
                        size={20}
                        className="text-blue-600 dark:text-blue-500"
                      />
                      Select a Time
                    </h3>
                    <div className="space-y-3">
                      {!selectedDate ? (
                        <div className="h-\[280px\] flex items-center justify-center p-8 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-2xl text-gray-400 text-center text-sm font-medium">
                          Please select a date on the calendar to view available
                          time slots.
                        </div>
                      ) : (
                        generateTimeSlots(selectedDate).map((time, idx) => (
                          <button
                            key={idx}
                            onClick={() => setSelectedTime(time)}
                            className={`w-full py-4 px-6 rounded-xl border font-bold transition-all flex justify-between items-center ${
                              selectedTime === time
                                ? "bg-blue-50 dark:bg-blue-900/30 border-blue-600 text-blue-700 dark:text-blue-400 shadow-sm"
                                : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-700"
                            }`}
                          >
                            {time}
                            {selectedTime === time && (
                              <CheckCircle2
                                size={18}
                                className="text-blue-600 dark:text-blue-400"
                              />
                            )}
                          </button>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="mt-12 pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    disabled={!selectedDate || !selectedTime}
                    className="flex items-center gap-2 bg-blue-600 disabled:bg-gray-300 dark:disabled:bg-gray-800 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-all disabled:cursor-not-allowed"
                  >
                    Next Step <ChevronRight size={18} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Client Details */}
            {step === 2 && (
              <motion.div
                key="step2"
                variants={pageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="p-8 md:p-10"
              >
                <button
                  onClick={() => setStep(1)}
                  className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
                >
                  <ArrowLeft size={16} /> Back to Schedule
                </button>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  Confirm your details
                </h3>

                <form className="space-y-5" onSubmit={handleBookingSubmit}>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <Mail size={18} />
                    </div>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="Work Email"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <Briefcase size={18} />
                    </div>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="Company Name"
                    />
                  </div>

                  {/* Summary Box */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 mt-8 border border-blue-100 dark:border-blue-800/50">
                    <p className="text-sm font-bold text-blue-800 dark:text-blue-300 mb-1">
                      Meeting Summary
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      Discovery Call on{" "}
                      <span className="font-bold text-gray-900 dark:text-white">
                        {selectedDate?.toLocaleDateString()}
                      </span>{" "}
                      at{" "}
                      <span className="font-bold text-gray-900 dark:text-white">
                        {selectedTime}
                      </span>
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-end">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-500/25"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* STEP 3: Success Confirmation */}
            {step === 3 && (
              <motion.div
                key="step3"
                variants={pageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="p-12 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-green-50 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                  Meeting Confirmed!
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md leading-relaxed">
                  A calendar invitation and confirmation has been sent to{" "}
                  <span className="font-bold text-gray-900 dark:text-white">
                    {formData.email}
                  </span>
                  . We look forward to speaking with you on{" "}
                  <span className="font-bold text-gray-900 dark:text-white">
                    {selectedDate?.toLocaleDateString()}
                  </span>{" "}
                  at{" "}
                  <span className="font-bold text-gray-900 dark:text-white">
                    {selectedTime}
                  </span>
                  .
                </p>
                <Link
                  to="/"
                  className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
                >
                  Return to Home
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
