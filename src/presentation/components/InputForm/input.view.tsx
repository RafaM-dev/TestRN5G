import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Content, Icon, InputProp, Title } from "./input.styled";
import { Controller } from "react-hook-form";
import { Text, View } from "react-native";

export const InputForm = ({
  placeholder,
  icon,
  onPress,
  keyboardType,
  name,
  control,
  disabled,
  required,
  onlyNumber,
  error,
  isDecimal,
  onEndEditing,
  customError,
  numericWms
}: any) => {

  const formattedValue = (value: any) => {
    if (!value) return "";

    if (isDecimal) {
      const cleanedValue = value.replace(/[^0-9]/g, '');
      const formattedInteger = new Intl.NumberFormat('es-ES').format(cleanedValue);
      return formattedInteger;
    } else if (numericWms) {
      const cleanedValue = value.replace(/[^0-9.,]/g, '');
      return cleanedValue
    }
    return value === undefined ? "" : String(value);
  }

  return (
    <Content>
      <Controller
        name={name}
        control={control}
        rules={{
          required: { message: "Este campo es requerido", value: required },
          ...(onlyNumber ? { pattern: /^\d+([.,]\d+)?$/ } : {}),
          ...(numericWms ? { pattern: /^[\d,\.]+$/ } : {})
        }}
        render={({ field: { value, onChange, onBlur } }) => (
          <InputProp
            error={error}
            value={formattedValue(value)}
            onBlur={onBlur}
            onEndEditing={onEndEditing}
            editable={disabled}
            onChangeText={(text) => {
              onChange(formattedValue(text));
            }}
            placeholder={placeholder}
            keyboardType={keyboardType || 'default'}
          />
        )}
      />
      {icon && (
        <Icon onPress={onPress}>
          <FontAwesomeIcon size={15} icon={icon} />
        </Icon>
      )}
      <View style={{ position: 'absolute', bottom: -1, left: 12, backgroundColor: 'white' }}>
        {customError && (
          <Text style={{ color: 'red', fontSize: 12.5 }}>{customError ? customError : ""}</Text>
        )}
      </View>
    </Content>
  );
};