import type {
  ComponentProps,
  FocusEventHandler,
  MouseEventHandler,
} from "react";

import {
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useState,
} from "react";

import clsx from "clsx";

interface ContextState {
  isShow: boolean;
}

interface ContextActions {
  open: () => void;
  close: () => void;
  toggle: () => void;
}

interface ContextValue extends ContextState, ContextActions {}

const defaultValue: ContextValue = {
  isShow: false,
  open: () => {},
  close: () => {},
  toggle: () => {},
};

const DropdownContext = createContext(defaultValue);
const useDropdown = () => useContext(DropdownContext);

interface PropsRoot
  extends Omit<ComponentProps<typeof DropdownContext.Provider>, "value"> {
  initialState?: ContextState;
}

function Root({ initialState, ...props }: PropsRoot) {
  const [isShow, setIsShow] = useState(
    initialState?.isShow ?? defaultValue.isShow
  );

  const open = () => setIsShow(true);
  const close = () => setIsShow(false);
  const toggle = () => setIsShow((prev) => !prev);

  const value: ContextValue = {
    isShow,
    open,
    close,
    toggle,
  };

  return <DropdownContext.Provider {...props} value={value} />;
}

type PropsToggle = ComponentProps<"button">;

function Toggle({ children, onClick, onBlur, ...props }: PropsToggle) {
  const { isShow, toggle, close } = useDropdown();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (onClick) onClick(event);
    toggle();
  };

  const handleBlur: FocusEventHandler<HTMLButtonElement> = (event) => {
    if (onBlur) onBlur(event);
    close();
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

type PropsList = ComponentProps<"div">;

function List({ children, className, ...props }: PropsList) {
  const { isShow } = useDropdown();

  if (!isValidElement(children)) return null;
  return cloneElement(children, {
    ...children.props,
    ...props,
    className: clsx(
      isShow
        ? "opacity-1 pointer-events-auto"
        : "opacity-0 pointer-events-none translate-y-4",
      children.props.className,
      className
    ),
  });
}

export const Dropdown = Object.assign(Root, { Toggle, List });
