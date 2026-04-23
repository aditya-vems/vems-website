import { Input } from "@v-ems/element";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

export function Newsletter() {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        Stay Connected
      </h4>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative"
        aria-label="Newsletter"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <Input
          id="newsletter-email"
          type="email"
          placeholder="Email Address"
          className="rounded-none py-5 pr-12 bg-transparent text-foreground border-border"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="absolute inset-y-0 right-3 flex items-center justify-center text-muted-foreground transition-colors duration-200 hover:text-white cursor-pointer"
        >
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            size={18}
            strokeWidth={1.75}
          />
        </button>
      </form>
      <p className="text-sm text-muted-foreground">
        By subscribing to our newsletter, you agree to our privacy policy.
      </p>
    </div>
  );
}
