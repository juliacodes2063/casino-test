import { FormControl, MenuItem, Select, SvgIcon, Box, Typography } from "@mui/material";
import { LOCALES, LOCALE_LABEL, LOCALE_FLAG, Locale } from "./localeConfig";
import { useLocale } from "./LocaleProvider";

function TickIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props} sx={{ fontSize: 16 }}>
      <path
        d="M5 9l7 7 7-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}

function LocaleOption({
  locale,
  textColor,
  fontSize = 16,
}: {
  locale: Locale;
  textColor: string;
  fontSize?: number;
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Box component="span" sx={{ fontSize }}>
        {LOCALE_FLAG[locale]}
      </Box>
      <Typography sx={{ color: textColor }}>
        {LOCALE_LABEL[locale]}
      </Typography>
    </Box>
  );
}

export function LocaleSelect() {
  const { locale, setLocale } = useLocale();

  return (
    <FormControl size="small" variant="outlined">
      <Select
        value={locale}
        onChange={(e) => setLocale(e.target.value as Locale)}
        IconComponent={TickIcon}
        MenuProps={{
          PaperProps: {
            sx: {
              mt: 1,
              borderRadius: "8px",
              backgroundColor: "rgba(18, 22, 38, 0.95)",
            },
          },
        }}
        renderValue={(value) => (
          <LocaleOption
            locale={value as Locale}
            textColor="text.secondary"
            fontSize={18}
          />
        )}
        sx={{
          width: 289,
          height: 56,
          borderRadius: "8px",
          color: "text.disabled",
          backgroundColor: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
            height: "100%",
            py: 0,
            px: 2,
            fontSize: 16,
            padding: "0 12px",
          },

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255,255,255,0.1)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255,255,255,0.2)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255,255,255,0.3)",
          },
          "& .MuiSvgIcon-root": {
            color: "rgba(255,255,255,0.7)",
          },
          "& .MuiSelect-icon": {
            right: 12,
            top: "50%",
            transform: "translateY(-50%)",
          },
        }}
      >
        {LOCALES.map((l) => (
          <MenuItem
            key={l}
            value={l}
            sx={{
              px: 2,
              py: 1.25,
            }}
          >
            <LocaleOption locale={l} textColor="text.secondary" />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
