import { Box } from "@/components/ui/box"
import { Text } from "@/components/ui/text"
import { Divider } from "@/components/ui/divider"
import { VStack } from "@/components/ui/vstack"
import EditScreenInfo from '@/components/EditScreenInfo';

export default function TabOneScreen() {
  return (
    <Box className="flex-1 items-center justify-center">
      <VStack space="md">
        <Text className="text-xl font-bold text-center">Tab One</Text>
        <Divider className="my-6 w-4/5" />
        <EditScreenInfo path="app/(tabs)/index.tsx" />
      </VStack>
    </Box>
  );
}
