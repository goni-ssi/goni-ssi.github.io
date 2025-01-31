import { Text } from '@radix-ui/themes';
import { ComponentPropsWithoutRef, ReactNode, useState } from 'react';
import {
  buttonCss,
  buttonIconCss,
  menuCss,
  menuItemWrapperCss,
  selectedButtonIconCss,
} from './index.css';
import clsx from 'clsx';
import DirectionIcon from '../../images/icons/direction.svg';

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
}

const AccordionMenu = ({ className, title, children }: AccordionMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx(menuCss, className)}>
      <button className={buttonCss} onClick={() => setIsOpen((prev) => !prev)}>
        {typeof title === 'string' ? <AccordionMenuText>{title}</AccordionMenuText> : title}
        <DirectionIcon
          className={clsx(buttonIconCss, { [selectedButtonIconCss]: isOpen })}
          width={24}
          height={24}
        />
      </button>
      {isOpen ? <div className={menuItemWrapperCss}>{children}</div> : null}
    </div>
  );
};

interface AccordionMenuItemProps {
  className?: string;
  children: ReactNode;
}

const AccordionMenuItem = ({ className, children }: AccordionMenuItemProps) => {
  return <div className={className}>{children}</div>;
};

Accordion.Menu = AccordionMenu;
Accordion.MenuItem = AccordionMenuItem;
