"use client";

import { ReactNode, forwardRef } from "react";
import { LinkProps as NextLinkProps } from "next/link";
import { Anchor, AnchorProps } from "@mantine/core";
import { Link as NextIntlLink } from "@/navigation/index";

type Props = AnchorProps &
  NextLinkProps & {
    children: ReactNode;
    locale?: string;
  };

export const Link = forwardRef<HTMLAnchorElement, Props>(function Link(
  props,
  ref
) {
  return (
    <Anchor component={NextIntlLink} underline="never" {...props} ref={ref} />
  );
});
