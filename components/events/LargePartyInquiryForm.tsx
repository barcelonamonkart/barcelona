"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

type LargePartyInquiryFormProps = {
  brandOrange: string;
  onClose: () => void;
};

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  eventDate: string;
  guestCount: string;
  eventType: string;
  message: string;
};

const INVALID_PHONE_ERROR =
  "Invalid phone number! please enter correct phone number";
const REQUIRED_PHONE_ERROR = "Phone is required.";

const LargePartyInquiryForm = ({
  brandOrange,
  onClose,
}: LargePartyInquiryFormProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const [formValues, setFormValues] = useState<FormValues>({
    fullName: "",
    email: "",
    phone: "",
    eventDate: "",
    guestCount: "",
    eventType: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof FormValues, string>>
  >({});
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(() => {
      onClose();
    }, 250);
  }, [onClose]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    const rafId = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      cancelAnimationFrame(rafId);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, [handleClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 py-8 transition-all duration-300 ${
        isVisible ? "bg-black/60 opacity-100" : "bg-black/0 opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-sm border border-gray-200 bg-white p-6 md:p-8 shadow-2xl transition-all duration-300 ${
          isVisible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-4 scale-95 opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close modal"
          className="cursor-pointer absolute right-4 top-4 text-gray-500 hover:text-gray-900 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <h3 className="text-2xl md:text-3xl  font-serif text-gray-900 mb-2 pr-16">
          Large Party & Event Inquiries
        </h3>
        <p className="text-sm text-gray-500 mb-8">
          Share your event details and our team will contact you shortly.
        </p>

        <form noValidate className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formValues.fullName}
              onChange={(event) => {
                const value = event.target.value;
                setFormValues((prev) => ({ ...prev, fullName: value }));
                if (value.trim()) {
                  setFieldErrors((prev) => ({ ...prev, fullName: undefined }));
                }
              }}
              className={`w-full border-b py-2 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors ${
                fieldErrors.fullName
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-200 focus:border-[#f59e0b]"
              }`}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formValues.email}
              onChange={(event) => {
                const value = event.target.value;
                setFormValues((prev) => ({ ...prev, email: value }));
                if (value.trim()) {
                  setFieldErrors((prev) => ({ ...prev, email: undefined }));
                }
              }}
              className={`w-full border-b py-2 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors ${
                fieldErrors.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-200 focus:border-[#f59e0b]"
              }`}
            />
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formValues.phone}
                onChange={(event) => {
                  const sanitizedValue = event.target.value
                    .replace(/\D/g, "")
                    .slice(0, 10);
                  setFormValues((prev) => ({ ...prev, phone: sanitizedValue }));
                  setFieldErrors((prev) => {
                    if (sanitizedValue.length === 0) {
                      return {
                        ...prev,
                        phone:
                          prev.phone === REQUIRED_PHONE_ERROR
                            ? REQUIRED_PHONE_ERROR
                            : undefined,
                      };
                    }
                    if (/^\d{10}$/.test(sanitizedValue)) {
                      return { ...prev, phone: undefined };
                    }
                    return { ...prev, phone: INVALID_PHONE_ERROR };
                  });
                }}
                onBlur={() => {
                  if (
                    formValues.phone.length > 0 &&
                    !/^\d{10}$/.test(formValues.phone)
                  ) {
                    setFieldErrors((prev) => ({
                      ...prev,
                      phone: INVALID_PHONE_ERROR,
                    }));
                  } else if (/^\d{10}$/.test(formValues.phone)) {
                    setFieldErrors((prev) => ({ ...prev, phone: undefined }));
                  }
                }}
                onKeyDown={(event) => {
                  if (["e", "E", "+", "-", "."].includes(event.key)) {
                    event.preventDefault();
                  }
                }}
                inputMode="numeric"
                pattern="[0-9]{10}"
                maxLength={10}
                className={`w-full border-b py-2 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors ${
                  fieldErrors.phone
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-200 focus:border-[#f59e0b]"
                }`}
              />
              {fieldErrors.phone === INVALID_PHONE_ERROR ? (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.phone}</p>
              ) : null}
            </div>
            <input
              type="date"
              name="eventDate"
              value={formValues.eventDate}
              onChange={(event) => {
                const value = event.target.value;
                setFormValues((prev) => ({ ...prev, eventDate: value }));
                if (value.trim()) {
                  setFieldErrors((prev) => ({ ...prev, eventDate: undefined }));
                }
              }}
              className={`w-full border-b py-2 text-sm text-gray-800 outline-none transition-colors ${
                fieldErrors.eventDate
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-200 focus:border-[#f59e0b]"
              }`}
            />
            <select
              name="guestCount"
              value={formValues.guestCount}
              onChange={(event) => {
                const value = event.target.value;
                setFormValues((prev) => ({ ...prev, guestCount: value }));
                if (value.trim()) {
                  setFieldErrors((prev) => ({
                    ...prev,
                    guestCount: undefined,
                  }));
                }
              }}
              className={`w-full border-b py-2 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors ${
                fieldErrors.guestCount
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-200 focus:border-[#f59e0b]"
              }`}
            >
              <option value="" disabled>
                Guest Count
              </option>
              {Array.from({ length: 10 }, (_, index) => (
                <option key={index + 1} value={String(index + 1)}>
                  {index + 1}
                </option>
              ))}
            </select>
            <select
              name="eventType"
              value={formValues.eventType}
              onChange={(event) => {
                const value = event.target.value;
                setFormValues((prev) => ({ ...prev, eventType: value }));
                if (value.trim()) {
                  setFieldErrors((prev) => ({ ...prev, eventType: undefined }));
                }
              }}
              className={`w-full border-b py-2 text-sm text-gray-800 outline-none transition-colors ${
                fieldErrors.eventType
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-200 focus:border-[#f59e0b]"
              }`}
            >
              <option value="" disabled>
                Event Type
              </option>
              <option value="birthday">Birthday</option>
              <option value="corporate">Corporate Event</option>
              <option value="anniversary">Anniversary</option>
              <option value="private-dining">Private Dining</option>
              <option value="other">Other</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Tell us about your event"
            rows={4}
            value={formValues.message}
            onChange={(event) =>
              setFormValues((prev) => ({
                ...prev,
                message: event.target.value,
              }))
            }
            className="w-full resize-none border-b border-gray-200 py-2 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-[#f59e0b]"
          />

          <button
            type="submit"
            className="cursor-pointer  px-8 py-3 text-white font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(245,158,11,0.3)] active:scale-95 shadow-md"
            style={{ backgroundColor: brandOrange }}
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default LargePartyInquiryForm;
