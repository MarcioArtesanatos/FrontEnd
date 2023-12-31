export default function Layout({children,className=""}){
  return(
      <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark p-32 ${className}`}>
          {children}
      </div>
  )
}