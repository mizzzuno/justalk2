import React from 'react';
import { 
  Box, 
  Button, 
  VStack, 
  Text, 
  Slide 
} from '@chakra-ui/react';
import { 
  FaUserPlus, 
  FaUsers, 
  FaMicrophone, 
  FaChartBar, 
  FaComments, 
  FaRedo, 
  FaTimes 
} from 'react-icons/fa';

const MenuComponent = ({ isMenuOpen, toggleMenu }) => {
  const menuActions = [
    { icon: <FaUserPlus />, label: "メンバーを追加", action: () => {} },
    { icon: <FaUsers />, label: "メンバーを選択", action: () => {} },
    { icon: <FaMicrophone />, label: "録音画面を表示", action: () => {} },
    { icon: <FaChartBar />, label: "フィードバックを表示", action: () => {} },
    { icon: <FaComments />, label: "会話詳細を表示", action: () => {} },
    { icon: <FaRedo />, label: "リセット", action: () => {} },
    { icon: <FaTimes />, label: "閉じる", action: toggleMenu }
  ];

  return (
    <Slide 
      direction="left" 
      in={isMenuOpen} 
      style={{ 
        width: '256px', 
        position: 'absolute', 
        zIndex: 10 
      }}
    >
      <Box
        height="100%"
        width="64"
        bg="gray.800"
        color="white"
        boxShadow="xl"
      >
        <VStack spacing={1} p={4} align="stretch">
          <Text 
            fontSize="lg" 
            fontWeight="semibold" 
            pb={2} 
            mb={2}
            borderBottom="1px" 
            borderColor="gray.600"
          >
            メニュー
          </Text>
          
          {menuActions.map((item, index) => (
            <Button
              key={index}
              w="100%"
              justifyContent="flex-start"
              variant="ghost"
              onClick={item.action}
              color="white"
              leftIcon={item.icon}
              _hover={{ bg: 'gray.700' }}
              borderRadius="none"
            >
              {item.label}
            </Button>
          ))}
        </VStack>
      </Box>
    </Slide>
  );
};

export default MenuComponent;