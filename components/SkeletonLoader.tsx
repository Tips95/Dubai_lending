'use client'

interface SkeletonLoaderProps {
  variant?: 'text' | 'circle' | 'rectangle' | 'form'
  width?: string
  height?: string
  className?: string
}

export default function SkeletonLoader({
  variant = 'text',
  width = '100%',
  height = '1rem',
  className = ''
}: SkeletonLoaderProps) {
  const baseClasses = 'animate-pulse bg-gradient-to-r from-white/5 via-white/10 to-white/5 bg-[length:200%_100%]'
  
  const variantClasses = {
    text: 'rounded',
    circle: 'rounded-full',
    rectangle: 'rounded-lg',
    form: 'rounded-xl'
  }

  if (variant === 'form') {
    return (
      <div className="space-y-4">
        <div className={`${baseClasses} ${variantClasses.form} h-12 w-full`} />
        <div className={`${baseClasses} ${variantClasses.form} h-12 w-full`} />
        <div className={`${baseClasses} ${variantClasses.form} h-12 w-3/4`} />
        <div className={`${baseClasses} ${variantClasses.rectangle} h-32 w-full`} />
        <div className={`${baseClasses} ${variantClasses.rectangle} h-12 w-full`} />
      </div>
    )
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ width, height }}
    />
  )
}

export function FormSkeleton() {
  return (
    <div className="space-y-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
      <div className="space-y-3">
        <SkeletonLoader height="0.875rem" width="30%" />
        <SkeletonLoader height="3rem" width="100%" variant="rectangle" />
      </div>
      <div className="space-y-3">
        <SkeletonLoader height="0.875rem" width="25%" />
        <SkeletonLoader height="3rem" width="100%" variant="rectangle" />
      </div>
      <div className="space-y-3">
        <SkeletonLoader height="0.875rem" width="20%" />
        <SkeletonLoader height="3rem" width="100%" variant="rectangle" />
      </div>
      <div className="space-y-3">
        <SkeletonLoader height="0.875rem" width="35%" />
        <SkeletonLoader height="8rem" width="100%" variant="rectangle" />
      </div>
      <SkeletonLoader height="3rem" width="100%" variant="rectangle" />
    </div>
  )
}
