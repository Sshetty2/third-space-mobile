import React from 'react';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '@/components/ui/button';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { useTheme } from '@/lib/ThemeContext';

export function ThemeSwitcher () {
  const { toggleTheme } = useTheme();

  const themes = [
    {
      label: 'Light',
      value: 'light',
      icon : '☀️'
    },
    {
      label: 'Dark',
      value: 'dark',
      icon : '🌙'
    }
  ];

  return (
    <Box className="p-4 bg-bg-secondary">
      <VStack space="md">
        <Text className="font-bold text-lg">Theme</Text>
        <HStack space="sm" className="flex-wrap">
          {themes.map(themeOption => (
            <Button
              key={themeOption.value}
              variant={'solid'}
              action={'primary' }
              onPress={() => toggleTheme(themeOption.value)}
              className={'mb-2'}
            >
              <Text className="mr-2">{themeOption.icon}</Text>
              <ButtonText>
                {themeOption.label}
              </ButtonText>
            </Button>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
}
