import React, { useState } from "react";
import { 
  ChakraProvider,
  extendTheme,  // @chakra-ui/reactからインポート
  Box,
  Flex,
  Button,
  Card,
  CardBody,
  Heading,
  useDisclosure
} from '@chakra-ui/react';
import { Menu } from "lucide-react";

// テーマ設定
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgGradient: "linear(to-b, gray.900, gray.800)",
        color: "white",
        minH: "100vh"
      }
    }
  },
  components: {
    Button: {
      variants: {
        recording: {
          w: "80px",
          h: "80px",
          rounded: "full",
          border: "4px",
          borderColor: "white",
          boxShadow: "lg",
          _active: {
            transform: "scale(0.95)"
          }
        }
      }
    }
  }
});

const members = [
  { id: "riko", name: "riko" },
  { id: "Masui", name: "Masui" },
  { id: "JT", name: "JT" },
  { id: "tomato", name: "tomato" },
];

function App() {
  const { isOpen: isMenuOpen, onToggle: toggleMenu } = useDisclosure();
  const [isRecording, setIsRecording] = useState(false);

  const toggleRecording = () => setIsRecording(!isRecording);

  return (
    <ChakraProvider theme={theme}>
      <Flex justify="center" align="center" minH="100vh">
        <Card 
          w="96px" 
          p={5} 
          rounded="2xl" 
          bg="gray.900" 
          position="relative" 
          boxShadow="xl" 
          border="1px" 
          borderColor="gray.700"
        >
          <CardBody>
            {/* ハンバーガーメニュー */}
            <Button 
              variant="ghost" 
              size="icon" 
              position="absolute" 
              top={4} 
              left={4} 
              onClick={toggleMenu}
            >
              <Menu size="24px" />
            </Button>

            {/* メニューの表示 */}
            {/* MenuComponentもChakra UIで実装する必要があります */}
            {/* <MenuComponent isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} /> */}

            {/* タイトル */}
            <Heading as="h1" size="xl" textAlign="center" mb={4}>
              JustTalk
            </Heading>

            {/* メンバー選択 */}
            <Flex wrap="wrap" justify="center" gap={2} mb={4}>
              <Button 
                variant="outline" 
                bg="blue.600" 
                px={3} 
                py={1} 
                rounded="full"
              >
                👥 {members.length}人のメンバーを選択中
              </Button>
              {members.map((member) => (
                <Button 
                  key={member.id} 
                  variant="secondary" 
                  px={3} 
                  py={1} 
                  rounded="full" 
                  bg="gray.700"
                >
                  {member.name}
                </Button>
              ))}
            </Flex>

            {/* チャートの枠 */}
            <Box 
              w="256px" 
              h="256px" 
              bg="gray.800" 
              mx="auto" 
              rounded="lg" 
              display="flex" 
              alignItems="center" 
              justifyContent="center"
            >
              {/* グラフが入る部分（仮） */}
            </Box>

            {/* 録音ボタン */}
            <Flex justify="center" mt={6}>
              <Button
                variant="recording"
                bg={isRecording ? "green.600" : "red.600"}
                onClick={toggleRecording}
              >
                {isRecording ? "停止" : "録音"}
              </Button>
            </Flex>
          </CardBody>
        </Card>
      </Flex>
    </ChakraProvider>
  );
}

export default App;