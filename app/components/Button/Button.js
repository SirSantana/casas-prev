
import Link from 'next/link';
import styles from './Button.module.css'

export const ButtonSize = {
  sm: 'sm',
  base: 'base',
  lg: 'lg',
  xl: 'xl'
}
export const ButtonVariant = {
  primary: 'primary',
  secondary: 'secondary',
  terciary: 'terciary',
  outlined: 'outlined',
  gradient: 'gradient',
  whatsapp:'whatsapp',
  gray:'gray'
}

export default function Button({ children, size = ButtonSize.base, active = false, disable = false, onSubmit=undefined, onlyIcon = false, variant = ButtonVariant.primary, onClick, icon = false, fullWidth = false, style, link = false, href = null, iconColor='white', sizeIcon='md', className}) {
  const variantButton = styles[`button-${variant}`];
  const sizeButton = styles[`button-${size}`]
  const classname = styles[className]
  return (
    link
      ?
      <Link  href={href} className={`${styles.button} ${variantButton} ${sizeButton} ${className}`}
        style={{ ...style, width: fullWidth && '100%' }}>
        {children}
      </Link>
      :
      <button
      onSubmit={onSubmit?true:undefined}
        onClick={onClick}
        className={`${styles.button} ${variantButton} ${sizeButton} ${classname}`}
        style={{ ...style, width: fullWidth && '100%', opacity:disable && '0.5', cursor:disable &&'not-allowed' }}
      >
        {children}
      </button>
  )
}