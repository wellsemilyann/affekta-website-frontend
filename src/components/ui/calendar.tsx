"use client";

import * as React from "react";
import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react@0.487.0";
import { DayPicker } from "react-day-picker@8.10.1";

import { cn } from "./utils";
import { buttonVariants } from "./button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  // Force white text for calendar elements
  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'calendar-white-text-fix';
    style.textContent = `
      .rdp-caption_label,
      .rdp-caption_label *,
      [class*="caption_label"],
      [class*="rdp-caption"] {
        color: white !important;
      }
      .rdp-nav_button,
      .rdp-nav_button *,
      .rdp-nav_button svg,
      button.rdp-nav_button,
      button.rdp-nav_button_previous,
      button.rdp-nav_button_next {
        color: white !important;
        fill: white !important;
        stroke: white !important;
      }
      .rdp button svg {
        color: white !important;
        fill: white !important;
        stroke: white !important;
      }
      /* Force all text in caption area to be white */
      .rdp-caption,
      .rdp-caption *,
      .rdp-caption_label,
      .rdp-caption_label * {
        color: white !important;
      }
    `;
    // Remove existing style if present
    const existing = document.getElementById('calendar-white-text-fix');
    if (existing) {
      existing.remove();
    }
    document.head.appendChild(style);
    return () => {
      const styleToRemove = document.getElementById('calendar-white-text-fix');
      if (styleToRemove) {
        document.head.removeChild(styleToRemove);
      }
    };
  }, []);

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "p-3",
        "[&_.rdp-caption_label]:!text-white",
        "[&_.rdp-nav_button]:!text-white [&_.rdp-nav_button_svg]:!text-white",
        "[&_button.rdp-nav_button]:!text-white",
        className
      )}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        caption: "flex justify-center pt-1 relative items-center w-full [&_*]:!text-white",
        caption_label: "text-sm font-medium !text-white [&]:!text-white [&_*]:!text-white [&>span]:!text-white [&>div]:!text-white",
        nav: "flex items-center gap-1 [&_*]:!text-white [&_button]:!text-white [&_svg]:!text-white",
        nav_button: cn(
          "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",
          "border border-border/60 bg-transparent size-7 p-0 opacity-50 hover:opacity-100",
          "!text-white hover:!text-white focus:!text-white active:!text-white",
          "[&_svg]:!text-white [&_svg]:fill-white [&_svg]:stroke-white",
          "[&>*]:!text-white [&>*]:fill-white [&>*]:stroke-white",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-x-1",
        head_row: "flex",
        head_cell:
          "text-gray-400 rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md",
        ),
        day: cn(
          "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 size-8 p-0 font-normal",
          "text-white hover:text-white focus:text-white active:text-white hover:bg-accent/20",
          "aria-selected:opacity-100",
        ),
        day_range_start:
          "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_range_end:
          "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_selected:
          "bg-primary !text-white hover:bg-primary hover:!text-white focus:bg-primary focus:!text-white",
        day_today: "bg-accent !text-white",
        day_outside:
          "day-outside text-gray-600 aria-selected:text-gray-600",
        day_disabled: "text-gray-500 opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("size-4 !text-white", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("size-4 !text-white", className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}

export { Calendar };
