
import { Text } from '@radix-ui/themes';
import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef, ReactNode, useEffect, useState } from 'react';

import DirectionIcon from '@images/icons/direction.svg';


import {
  buttonContentCss,
  buttonCss,
  buttonIconCss,
  menuCss,
  menuItemWrapperCss,
  selectedButtonIconCss,
} from './index.css';

interface AccordionProps {
  className?: string;
  children: ReactNode;
}

export const Accordion = ({ className, children }: AccordionProps) => {
  return <div className={className}>{children}</div>;
};

const AccordionMenuText = ({ className, ...props }: ComponentPropsWithoutRef<typeof Text>) => {
  return <Text size="7" weight="medium" className={className} {...props} />;
};

interface AccordionMenuProps {
  className?: string;
  children: ReactNode;
  title: ReactNode;
  open?: boolean;
}

const AccordionMenu = forwardRef<HTMLDivElement, AccordionMenuProps>(
  ({ className, title, children, open }, ref) => {
    const [isOpen, setIsOpen] = useState(open ?? false);

    useEffect(() => {
      if (open == null) {
        return;
      }

      setIsOpen(open);
    }, [open]);

    return (
      <div ref={ref} className={clsx(menuCss, className)}>
        <button className={buttonCss} onClick={() => setIsOpen((prev) => !prev)}>
          <div className={buttonContentCss}>
            {typeof title === 'string' ? <AccordionMenuText>{title}</AccordionMenuText> : title}
          </div>
          <DirectionIcon
            className={clsx(buttonIconCss, { [selectedButtonIconCss]: isOpen })}
            width={24}
            height={24}
          />
        </button>
        {isOpen ? <div className={menuItemWrapperCss}>{children}</div> : null}
      </div>
    );
  },
);

AccordionMenu.displayName = 'AccordionMenu';

interface AccordionMenuItemProps {
  className?: string;
  children: ReactNode;
}

const AccordionMenuItem = ({ className, children }: AccordionMenuItemProps) => {
  return <div className={className}>{children}</div>;
};

Accordion.Menu = AccordionMenu;
Accordion.MenuItem = AccordionMenuItem;
