export default class Question {
  constructor(
    public id: number,
    public title: string,
    public images: { id: number; url: string, title: string }[]
  ) {}
}
