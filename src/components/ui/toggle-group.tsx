"use client";

import * as React from "react";
import * as TogglewebpPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/tailwind";
import { toggleVariants } from "@/components/ui/toggle";

const TogglewebpContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
});

const Togglewebp = React.forwardRef<
  React.ElementRef<typeof TogglewebpPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglewebpPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <TogglewebpPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <TogglewebpContext.Provider value={{ variant, size }}>
      {children}
    </TogglewebpContext.Provider>
  </TogglewebpPrimitive.Root>
));

Togglewebp.displayName = TogglewebpPrimitive.Root.displayName;

const TogglewebpItem = React.forwardRef<
  React.ElementRef<typeof TogglewebpPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof TogglewebpPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(TogglewebpContext);

  return (
    <TogglewebpPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
        "",
      )}
      {...props}
    >
      {children}
    </TogglewebpPrimitive.Item>
  );
});

TogglewebpItem.displayName = TogglewebpPrimitive.Item.displayName;

export { Togglewebp, TogglewebpItem };
