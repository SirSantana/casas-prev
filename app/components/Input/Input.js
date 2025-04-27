"use client";

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AlertCircle } from 'lucide-react';

/**
 * Componente Input reutilizable simplificado con UI/UX elegante.
 *
 * @param {object} props - Las props del componente.
 * @param {string} [props.label] - El texto de la etiqueta asociada al input.
 * @param {string} props.id - ID único para asociar la etiqueta y el input (fundamental para accesibilidad).
 * @param {string} [props.error] - Mensaje de error a mostrar debajo del input.
 * @param {string} [props.helpText] - Texto de ayuda o descripción a mostrar debajo del input.
 * @param {React.ReactNode} [props.icon] - Icono a mostrar dentro del input.
 * @param {'left' | 'right'} [props.iconPosition='left'] - Posición del icono dentro del input.
 * @param {string} [props.containerClassName=''] - Clases CSS adicionales para el contenedor principal.
 * @param {string} [props.labelClassName=''] - Clases CSS adicionales para la etiqueta.
 * @param {string} [props.inputWrapperClassName=''] - Clases CSS adicionales para el contenedor del input.
 * @param {string} [props.helpTextClassName=''] - Clases CSS adicionales para el texto de ayuda.
 * @param {string} [props.errorClassName=''] - Clases CSS adicionales para el texto de error.
 * @param {object} [props.labelProps={}] - Props adicionales para el elemento label.
 * @param {object} [props.inputWrapperProps={}] - Props adicionales para el contenedor del input.
 * @param {object} [props.helpTextProps={}] - Props adicionales para el contenedor del texto de ayuda.
 * @param {object} [props.errorProps={}] - Props adicionales para el contenedor del texto de error.
 * @param {string} [props.className=''] - Clases CSS adicionales para el input nativo.
 * @param {object} rest - Todas las demás props estándar de input.
 * @returns {React.ReactElement} El elemento Input renderizado.
 */
const Input = ({
  label,
  id,
  error,
  helpText,
  icon,
  iconPosition = 'left',
  containerClassName = '',
  labelClassName = '',
  inputWrapperClassName = '',
  helpTextClassName = '',
  errorClassName = '',
  labelProps = {},
  inputWrapperProps = {},
  helpTextProps = {},
  errorProps = {},
  className = '',
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e) => {
    setIsFocused(true);
    if (rest.onFocus) rest.onFocus(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    if (rest.onBlur) rest.onBlur(e);
  };

  // Determinar el padding basado en la existencia y posición del icono
  const paddingClass = icon
    ? iconPosition === 'left'
      ? 'pl-10 pr-4'
      : 'pr-10 pl-4'
    : 'px-4';

  // Simplificando los estados visuales
  const getInputStateClasses = () => {
    if (error) return 'border-red-400 focus:ring-red-400';
    return 'border-gray-300 focus:ring-primary';
  };

  // Clases base simplificadas
  const baseInputClasses = `
    w-full py-3 rounded-lg border
    focus:outline-none focus:ring-1 focus:ring-opacity-20
    text-gray-900 placeholder-gray-500
    transition-colors duration-200
    ${paddingClass}
    ${getInputStateClasses()}
    ${rest.disabled ? 'disabled:opacity-70 disabled:cursor-not-allowed disabled:bg-gray-100' : ''}
    ${rest.readOnly ? 'read-only:bg-gray-50 read-only:border-gray-300' : ''}
    ${className}
  `;

  const errorId = `${id}-error`;
  const helpTextId = `${id}-help`;
  const describedBy = [];
  if (error) describedBy.push(errorId);
  if (helpText && !error) describedBy.push(helpTextId);

  return (
    <div className={`mb-4 ${containerClassName}`}>
      {label && (
        <label
          htmlFor={id}
          className={`block text-sm font-medium text-primary mb-2 ${labelClassName}`}
          {...labelProps}
        >
          {label}
          {rest.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div 
        className={`relative ${inputWrapperClassName}`} 
        {...inputWrapperProps}
      >
        {icon && iconPosition === 'left' && (
          <div className={`
            absolute left-3 top-1/2 transform -translate-y-1/2 
            ${error ? 'text-red-500' : 'text-gray'} 
            pointer-events-none
          `}>
            {icon}
          </div>
        )}

        <input
          id={id}
          className={baseInputClasses}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
          aria-invalid={!!error}
          aria-describedby={describedBy.join(' ') || undefined}
        />

        {icon && iconPosition === 'right' && (
          <div className={`
            absolute right-3 top-1/2 transform -translate-y-1/2 
            ${error ? 'text-red-500' : 'text-gray-500'} 
            pointer-events-none
          `}>
            {icon}
          </div>
        )}
      </div>

      {/* Mensaje de error */}
      {error && (
        <p
          id={errorId}
          className={`mt-2 text-sm text-red-600 ${errorClassName}`}
          role="alert"
          {...errorProps}
        >
          {error}
        </p>
      )}

      {/* Texto de ayuda */}
      {!error && helpText && (
        <p
          id={helpTextId}
          className={`mt-2 text-sm text-gray-600 ${helpTextClassName}`} 
          {...helpTextProps}
        >
          {helpText}
        </p>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
  helpText: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  containerClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  inputWrapperClassName: PropTypes.string,
  helpTextClassName: PropTypes.string,
  errorClassName: PropTypes.string,
  labelProps: PropTypes.object,
  inputWrapperProps: PropTypes.object,
  helpTextProps: PropTypes.object,
  errorProps: PropTypes.object,
  className: PropTypes.string,
};

Input.defaultProps = {
  iconPosition: 'left',
  containerClassName: '',
  labelClassName: '',
  inputWrapperClassName: '',
  helpTextClassName: '',
  errorClassName: '',
  labelProps: {},
  inputWrapperProps: {},
  helpTextProps: {},
  errorProps: {},
  className: '',
};

export default Input;