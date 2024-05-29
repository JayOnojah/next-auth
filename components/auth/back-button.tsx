'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface BackBouttonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackBouttonProps) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
