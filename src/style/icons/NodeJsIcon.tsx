export const NodeJsIcon = (props: { size?: number; className: string }) => {
  const size = props.size ? props.size : 40
  return (
    <svg
      fill="none"
      viewBox="0 0 18 21"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <title>NodeJSIcon</title>
      <path fill="#3B8739" d="M18 15.59V5.197L9 .004 0 5.197V15.59l9 5.197z" />
      <path fill="#79BE66" d="m8.996 0 9 15.587-9 5.196L0 5.197z" />
      <path fill="#55A344" d="m0 15.59 3.089-5.04L0 5.197z" />
      <path fill="#639D57" d="m14.996 10.393 3-5.196L9 .004z" />
    </svg>
  )
}
