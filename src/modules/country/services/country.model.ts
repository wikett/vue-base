// Country Model
export class Country {
  name!: string
  capital!: string[]
  population!: number
  continents!: string[]

  constructor(init?: Partial<Country>) {
    Object.assign(this, init)
  }
}
