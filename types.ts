import { SxProps } from '@mui/system';
export interface Item {
  label: { value: string; sx?: SxProps };
  content: { value: string; sx?: SxProps };
  seperator?: { value: string; sx?: SxProps };
  container?: { sx?: SxProps };
}

export interface GridConfig {
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
}
export interface GridItem {
  config: { sx?: SxProps; grid?: GridConfig };
  items: Item[];
}
export interface DescriptionGeneratorDataProps {
  container?: { sx?: SxProps; spacing?: number };
  containerSpacing?: number;
  data?: GridItem[];
  config?: {
    label: { sx?: SxProps };
    contentContainer: { sx?: SxProps };
    content: { sx?: SxProps };
  };
}
export interface DescriptionGeneratorProps {
  data?: DescriptionGeneratorDataProps | null;
  loadingColumns?: number;
  loadingSize?: ILoadingSize;
}
export interface ILoadingSize {
  width: number;
  height: number;
}
