import { ButtonElm } from './button.model';

interface ListContent {
 title?: string;
 subtitle?: string;
 imageUrl?: string;
 button?: ButtonElm;
}

interface ListHeader {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
}

export interface ListData {
  header?: ListHeader;
  Lists: ListContent[];
}

