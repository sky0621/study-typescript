const heavyTask = async (): Promise<number> => {
  return new Promise<number>((resolve, reject) => {
    reject(new Error())
  })
}
