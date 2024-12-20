import create from "./HttpServices"

export interface CommentData {
  id: number;
  name: string;
  body: string;
}

export default create("comments") 
