import type {
  ComponentProps,
  FocusEventHandler,
  MouseEventHandler,
} from "react";

import { cloneElement, isValidElement, useState } from "react";

import clsx from "clsx";

type State = {
  isShow: boolean;
};

type Actions = {
  open: () => void;
  close: () => void;
  toggle: () => void;
};

type Events = {
  [Key in keyof Actions as `on${Capitalize<Key>}`]: Actions[Key];
};

export type Value = State & Actions;

const defaultValue: Value = {
  isShow: false,
  open: () => null,
  close: () => null,
  toggle: () => null,
};

export function useDropdown(initialState?: State) {
  const [isShow, setIsShow] = useState(
    initialState?.isShow ?? defaultValue.isShow
  );

  const open = () => setIsShow(true);
  const close = () => setIsShow(false);
  const toggle = () => setIsShow((prev) => !prev);

  return {
    isShow,
    open,
    close,
    toggle,
  };
}

type PropsToggle = ComponentProps<"button"> &
  Pick<Events, "onToggle" | "onClose"> &
  Pick<State, "isShow">;

function Toggle({
  children,
  onClick,
  onBlur,
  onToggle,
  onClose,
  isShow,
  ...props
}: PropsToggle) {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (onClick) onClick(event);
    onToggle();
  };

  const handleBlur: FocusEventHandler<HTMLButtonElement> = (event) => {
    if (onBlur) onBlur(event);
    onClose();
  };

  if (!isValidElement(children)) return null;

  return cloneElement(children, {
    ...children.props,
    ...props,
    onClick: handleClick,
    onBlur: handleBlur,
    "data-show": isShow,
  });
}

type PropsList = ComponentProps<"div"> & Pick<State, "isShow">;

function List({ children, className, isShow, ...props }: PropsList) {
  if (!isValidElement(children)) return null;
  return cloneElement(children, {
    ...children.props,
    ...props,
    className: clsx(
      isShow
        ? "opacity-1 pointer-events-auto"
        : "opacity-0 pointer-events-none",
      children.props.className,
      className
    ),
  });
}

export const Dropdown = { Toggle, List };
