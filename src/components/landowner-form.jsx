"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  LAND_SIZE_UNITS,
  LAND_TYPES,
  STANDARD_OPTIONS,
  landownerDefaults,
  landownerSchema,
} from "@/lib/landowner-schema";

const fieldClass =
  "w-full rounded-none border border-line bg-canvas px-4 py-3 text-ink outline-none transition focus:border-charcoal";
const labelClass = "mb-2 block text-sm font-medium text-ink";
const errorClass = "mt-2 block text-sm text-red-700";

export default function LandownerForm({ initialStandard = "" }) {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(landownerSchema),
    defaultValues: { ...landownerDefaults, standard: initialStandard },
  });

  async function onSubmit(values) {
    setStatus({ state: "idle", message: "" });

    try {
      const response = await fetch("/api/landowner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.ok) {
        setStatus({
          state: "error",
          message:
            data.error || "We couldn't submit your enquiry. Please try again.",
        });
        return;
      }

      reset({ ...landownerDefaults, standard: initialStandard });
      setStatus({
        state: "success",
        message:
          "Thank you. We have received your details and will contact you shortly.",
      });
    } catch {
      setStatus({
        state: "error",
        message:
          "We couldn't reach the server. Please check your connection and try again.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="max-w-2xl">
      {/* Honeypot — hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="name">
            Name <span className="text-slate">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            className={fieldClass}
            aria-invalid={Boolean(errors.name)}
            {...register("name")}
          />
          {errors.name && <span className={errorClass}>{errors.name.message}</span>}
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="phone">
            Phone Number <span className="text-slate">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+880"
            className={fieldClass}
            aria-invalid={Boolean(errors.phone)}
            {...register("phone")}
          />
          {errors.phone && <span className={errorClass}>{errors.phone.message}</span>}
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="landLocation">
            Land Location <span className="text-slate">*</span>
          </label>
          <input
            id="landLocation"
            type="text"
            className={fieldClass}
            aria-invalid={Boolean(errors.landLocation)}
            {...register("landLocation")}
          />
          {errors.landLocation && (
            <span className={errorClass}>{errors.landLocation.message}</span>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor="landSize">
            Land Size <span className="text-slate">*</span>
          </label>
          <input
            id="landSize"
            type="text"
            inputMode="decimal"
            className={fieldClass}
            aria-invalid={Boolean(errors.landSize)}
            {...register("landSize")}
          />
          {errors.landSize && (
            <span className={errorClass}>{errors.landSize.message}</span>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor="landSizeUnit">
            Unit <span className="text-slate">*</span>
          </label>
          <select
            id="landSizeUnit"
            className={fieldClass}
            aria-invalid={Boolean(errors.landSizeUnit)}
            {...register("landSizeUnit")}
          >
            {LAND_SIZE_UNITS.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
          {errors.landSizeUnit && (
            <span className={errorClass}>{errors.landSizeUnit.message}</span>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor="landType">
            Type <span className="text-slate">*</span>
          </label>
          <select
            id="landType"
            className={fieldClass}
            defaultValue=""
            aria-invalid={Boolean(errors.landType)}
            {...register("landType")}
          >
            <option value="" disabled>
              Select type
            </option>
            {LAND_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.landType && (
            <span className={errorClass}>{errors.landType.message}</span>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor="standard">
            Development Standard <span className="text-slate">*</span>
          </label>
          <select
            id="standard"
            className={fieldClass}
            aria-invalid={Boolean(errors.standard)}
            {...register("standard")}
          >
            <option value="" disabled>
              Select standard
            </option>
            {STANDARD_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.standard && (
            <span className={errorClass}>{errors.standard.message}</span>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 inline-flex items-center justify-center bg-ink px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-charcoal disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending…" : "Send Enquiry"}
      </button>

      {status.state !== "idle" && (
        <p
          role="status"
          className={`mt-6 border-l-2 py-2 pl-4 text-sm ${
            status.state === "success"
              ? "border-ink text-ink"
              : "border-red-700 text-red-700"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
