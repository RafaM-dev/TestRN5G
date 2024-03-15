import React from "react";
import { View } from "react-native";
import { Controller } from "react-hook-form";
import { Picker } from "@react-native-picker/picker";
import { useTheme } from "../../../styles";

type TOptions = {
  label: string;
  value: string;
};

export const Select = ({
  name,
  control,
  options,
  error,
  required,
}: any) => {
  const { theme } = useTheme();
  return (
    <View style={{ alignItems: 'center' }}>
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field: { onChange, value } }) => (
          <View
            style={{
              backgroundColor: "#594077",
              borderColor: error ? theme.colors.error : "#d2d2d2",
              borderStyle: "solid",
              borderRadius: 12,
              width: "95%",
              height: 48,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Picker selectedValue={value} style={{ color: '#fff', lineHeight: 48 }} onValueChange={onChange} dropdownIconColor={'#fff'}  >
              <Picker.Item label={"Tipo de documento"} value={''} />
              {options.map((option: TOptions, idx: number) => (
                <Picker.Item
                  key={`${option.value}-${idx}`}
                  label={option.label}
                  value={option.value}
                />
              ))}
            </Picker>
          </View>
        )}
      />
    </View>
  );
};