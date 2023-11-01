import { ReactElement, MouseEventHandler, useState, ChangeEvent, useEffect, useRef } from 'react';
import { classNames } from 'utils';
import ErrorMessage from './ErrorMessage';

interface RefObject<T> {
  readonly current: T | null;
}

export interface TextFieldProps {
  /**
   * Autocomplete for the input / textarea element
   *
   * Allow any other string elements:
   * Chrome respects autocomplete=off only when there is at least one other input
   * element in the form with any other autocomplete value.
   *
   * https://stackoverflow.com/a/30873633/17442963
   *
   * On of any string
   */
  autoComplete?: string;
  /**
   * Label for input
   */
  label?: string;
  /**
   * Append component beside the label
   */
  labelAppend?: JSX.Element;
  /**
   * TextField Error
   */
  error?: string | null;
  /**
   * Error message position
   */
  errorMessagePosition?: 'top' | 'bottom';
  /**
   * Type of input
   */
  type?: 'text' | 'email' | 'password';
  /**
   * Input name
   */
  name?: string;
  /**
   * SVG icon
   */
  icon?: JSX.Element;
  /**
   * Position of icon
   */
  iconPosition?: 'left' | 'right';
  /**
   * Input placeholder
   */
  placeholder?: string;
  /**
   * Wrapper classname
   */
  className?: string;
  /**
   * Value of input
   */
  value?: string | number;
  /**
   * Append component beside input
   */
  children?: JSX.Element | JSX.Element[];
  /**
   * Disable input
   */
  disabled?: boolean;
  /**
   * Make field required
   */
  required?: boolean;
  /**
   * Define input id
   */
  id?: string;
  /**
   * Data attribute for testing
   */
  dataAtt?: string;
  /**
   * Optional input event
   */
  onChange?: (value: string) => void;
  /**
   * Optional click input event
   */
  onClick?: MouseEventHandler<HTMLDivElement>;
  /**
   * Input Text Type
   */
  inputType?: 'textarea' | 'input';
  /**
   * Automatically focuses the element
   */
  autoFocus?: boolean;
}

const TextField = ({
  autoComplete = 'on',
  autoFocus = false,
  children,
  className,
  dataAtt,
  disabled,
  error,
  errorMessagePosition = 'bottom',
  icon,
  iconPosition = 'left',
  id,
  inputType = 'input',
  label,
  labelAppend,
  name,
  onChange,
  onClick,
  placeholder,
  required = false,
  type = 'text',
  value,
}: TextFieldProps): ReactElement => {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    if (!onChange || disabled) {
      return;
    }

    onChange(e.target.value);
  };

  // For when the element is active.
  const [active, setActive] = useState(false);

  const ref = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref.current && autoFocus) {
      ref.current.focus();
    }
  }, [autoFocus]);

  return (
    <fieldset className={className}>
      {label && (
        <div className="mb-2 flex justify-between">
          <div className="text-light-text dark:text-dark-text">
            <label className="flex" htmlFor={id}>
              {label}
              {required && <span className="ml-1 text-xs text-accent-secondary">*</span>}
            </label>
            {labelAppend && <div className="ml-4">{labelAppend}</div>}
          </div>
          {error && errorMessagePosition === 'top' && (
            <ErrorMessage message={error} dataAtt={dataAtt} />
          )}
        </div>
      )}
      <div onClick={onClick}>
        {inputType === 'input' ? (
          <div className="flex items-center">
            <input
              autoComplete={autoComplete}
              className={classNames(
                'appearance-none rounded focus:text-accent-secondary focus:outline focus:outline-light-text focus:ring-transparent dark:focus:outline-dark-text',
                'borber-b h-12 w-full bg-dark-dark/20 p-4 transition-[height] duration-300 dark:bg-white/20'
              )}
              data-testid={dataAtt}
              disabled={disabled}
              id={id}
              name={name || ''}
              onChange={handleChange}
              placeholder={placeholder || ''}
              ref={ref as RefObject<HTMLInputElement>}
              required={required}
              style={{ fontSize: 'inherit' }}
              type={type}
              value={value || ''}
            />
            {iconPosition === 'right' ? icon : children}
          </div>
        ) : (
          <textarea
            autoComplete={autoComplete}
            className={classNames(
              'appearance-none rounded focus:text-accent-secondary focus:outline focus:outline-light-text focus:ring-transparent dark:focus:outline-dark-text',
              'borber-b w-full bg-dark-dark/20 p-4 transition-[height] duration-300 dark:bg-white/20',
              active || value ? 'h-52' : 'h-12'
            )}
            data-testid={dataAtt}
            disabled={disabled}
            id={id}
            name={name || ''}
            onClick={(): void => setActive(true)}
            onBlur={(): void => {
              setTimeout(() => {
                setActive(false);
              }, 150);
            }}
            onChange={handleChange}
            placeholder={placeholder || ''}
            ref={ref as RefObject<HTMLTextAreaElement>}
            required={required}
            value={value || ''}
          />
        )}
      </div>
      {error && errorMessagePosition === 'bottom' && (
        <ErrorMessage message={error} dataAtt={dataAtt} className="mt-2" />
      )}
    </fieldset>
  );
};

export default React.memo(TextField);
