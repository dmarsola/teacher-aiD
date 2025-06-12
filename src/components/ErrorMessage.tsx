const ErrorMessage = (id: string, message: string) => {
  return (
    <div id={id} className="invalid-feedback d-block">
      {message}
    </div>
  )
}

export default ErrorMessage
