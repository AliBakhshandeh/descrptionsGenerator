'use client';
import { Box, Grid, Skeleton, Typography } from '@mui/material';
import { DescriptionGeneratorProps } from './types';

const DescriptionGenerator = ({ data, loadingColumns, loadingSize = { width: 210, height: 60 } }: DescriptionGeneratorProps) => {
  return (
    <Grid sx={{ ...data?.container?.sx }} spacing={data?.container?.spacing ? `${data?.container?.spacing}px` : '20px'} container>
      {!data?.data?.length &&
        [...new Array(loadingColumns)]?.map((_, index) => (
          <Grid m={2} item>
            <Skeleton key={`loading-${index}`} variant="rounded" width={loadingSize.width} height={loadingSize.height} />
          </Grid>
        ))}
      {data?.data?.map((grid: any, index: number) => (
        <Grid
          key={`grid-${index}`}
          sx={{ ...grid.config?.sx }}
          lg={grid.config.grid?.lg || 12}
          md={grid.config.grid?.md || 12}
          sm={grid.config.grid?.sm || 12}
          xs={grid.config.grid?.xs || 12}
          item
        >
          {grid.items?.map((item: any, index: number) => (
            <Box key={`item-${index}`} sx={{ ...item?.container?.sx, ...data?.config?.contentContainer?.sx }}>
              <Typography component="span" sx={{ ...item.label?.sx, ...data.config?.label?.sx }}>
                {item.label?.value}
              </Typography>{' '}
              {item?.seperator && <Typography component="span">{item.seperator?.value || ':'}</Typography>}
              <Typography component="span" sx={{ ...item.content?.sx, ...data.config?.content?.sx }}>
                {item.content?.value}
              </Typography>
            </Box>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default DescriptionGenerator;

// {
//   config: {
//     label: { sx: { color: theme.palette.greyTwo['600'] } },
//     contentContainer: { sx: { marginTop: '16px' } },
//     content: { sx: { margin: '0 0 0 4px' } }
//   },
//   container: {},
//   data: [
//     {
//       config: {
//         grid: {
//           xs: 4,
//           sm: 12,
//           md: 4,
//           lg: 4
//         },
//         sx: {}
//       },
//       items: [
//         { label: { value: 'محل تولد', sx: {} }, content: { value: 'رضا', sx: {} }, seperator: { sx: {}, value: ':' } },
//         { label: { value: 'تاریخ استخدام / ورود', sx: {} }, content: { value: 'رضا', sx: {} }, seperator: { sx: {}, value: ':' } },
//         { label: { value: 'نام پدر', sx: {} }, content: { value: 'رضا', sx: {} }, seperator: { sx: {}, value: ':' } },
//         { label: { value: 'وضعیت سرپرستی', sx: {} }, content: { value: 'رضا', sx: {} }, seperator: { sx: {}, value: ':' } },
//         { label: { value: 'شماره همراه ثبت نام', sx: {} }, content: { value: 'رضا', sx: {} }, seperator: { sx: {}, value: ':' } },
//         { label: { value: 'کد', sx: {} }, content: { value: 'رضا', sx: {} }, seperator: { sx: {}, value: ':' } },
//         { label: { value: 'کد پرسنلی', sx: {} }, content: { value: 'رضا', sx: {} }, seperator: { sx: {}, value: ':' } },
//         { label: { value: 'تاریخ شروع پوشش', sx: {} }, content: { value: 'رضا', sx: {} }, seperator: { sx: {}, value: ':' } }
//       ]
//     },
//     {
//       config: {
//         grid: {
//           xs: 4,
//           sm: 12,
//           md: 4,
//           lg: 4
//         },
//         sx: {}
//       },
//       items: [
//         {
//           label: { value: 'شماره تماس', sx: {} },
//           content: { value: 'محمد', sx: {} },
//           seperator: { sx: {}, value: ':' },
//           container: { sx: {} }
//         },
//         {
//           label: { value: 'تاریخ بازنشستگی / خروج', sx: {} },
//           content: { value: 'محمد', sx: {} },
//           seperator: { sx: {}, value: ':' },
//           container: { sx: {} }
//         },
//         {
//           label: { value: 'بیمه شده ایثارگر', sx: {} },
//           content: { value: 'محمد', sx: {} },
//           seperator: { sx: {}, value: ':' },
//           container: { sx: {} }
//         },
//         {
//           label: { value: 'مکان', sx: {} },
//           content: { value: 'محمد', sx: {} },
//           seperator: { sx: {}, value: ':' },
//           container: { sx: {} }
//         },
//         {
//           label: { value: 'شماره تماس', sx: {} },
//           content: { value: 'محمد', sx: {} },
//           seperator: { sx: {}, value: ':' },
//           container: { sx: {} }
//         },
//         {
//           label: { value: 'کد رایانه', sx: {} },
//           content: { value: 'محمد', sx: {} },
//           seperator: { sx: {}, value: ':' },
//           container: { sx: {} }
//         },
//         {
//           label: { value: 'کد واحد حسابداری', sx: {} },
//           content: { value: 'محمد', sx: {} },
//           seperator: { sx: {}, value: ':' },
//           container: { sx: {} }
//         },
//         {
//           label: { value: 'تاریخ پایان پوشش', sx: {} },
//           content: { value: 'محمد', sx: {} },
//           seperator: { sx: {}, value: ':' },
//           container: { sx: {} }
//         }
//       ]
//     },
//     {
//       config: {
//         grid: {
//           xs: 4,
//           sm: 12,
//           md: 4,
//           lg: 4
//         },
//         sx: {}
//       },
//       items: [
//         {
//           label: { value: 'تاریخ تولد', sx: {} },
//           content: { value: 'رضا', sx: {} },
//           seperator: { sx: {}, value: ':' },
//           container: { sx: {} }
//         },
//         {
//           label: { value: 'تاریخ فوت', sx: {} },
//           content: { value: 'رضا', sx: {} },
//           seperator: { sx: {}, value: ':' },
//           container: { sx: {} }
//         },
//         {
//           label: { value: 'بیمه شده', sx: {} },
//           content: { value: 'رضا', sx: {} },
//           seperator: { sx: {}, value: ':' },
//           container: { sx: {} }
//         },
//         { label: { value: 'SEQ', sx: {} }, content: { value: 'رضا', sx: {} }, seperator: { sx: {}, value: ':' }, container: { sx: {} } },
//         {
//           label: { value: '(سما)کد درون سازمانی', sx: {} },
//           content: { value: 'رضا', sx: {} },
//           seperator: { sx: {}, value: ':' },
//           container: { sx: {} }
//         },
//         {
//           label: { value: 'کد سرپرست', sx: {} },
//           content: { value: 'رضا', sx: {} },
//           seperator: { sx: {}, value: ':' },
//           container: { sx: {} }
//         },
//         {
//           label: { value: 'بیمه نامه', sx: {} },
//           content: { value: 'رضا', sx: {} },
//           seperator: { sx: {}, value: ':' },
//           container: { sx: {} }
//         },
//         {
//           label: { value: 'بیمه گذار', sx: {} },
//           content: { value: 'رضا', sx: {} },
//           seperator: { sx: {}, value: ':' },
//           container: { sx: {} }
//         }
//       ]
//     }
//   ]
// };
