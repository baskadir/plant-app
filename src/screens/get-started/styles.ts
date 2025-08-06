import { StyleSheet } from 'react-native';
import { COLORS } from '@/utils/constants/colors.ts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titleContainer: {
    paddingInline: 36,
  },
  title: {
    fontSize: 28,
    color: COLORS.MAIN_TEXT,
    letterSpacing: 0.07,
    marginBottom: 12,
  },
  appName: {
    fontWeight: '600',
    letterSpacing: 0.07,
  },
  subTitle: {
    fontSize: 16,
    color: 'rgba(19, 35, 27, 0.7)',
    letterSpacing: 0.07,
  },
  image: {
    width: '100%',
    height: 499,
    resizeMode: 'contain',
    marginTop: 16,
  },
  bottomContainer: {
    paddingInline: 36,
    alignItems: 'center',
  },
  bottomTextContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 11,
    color: 'rgba(89, 113, 101, 0.7)',
    letterSpacing: 0.07,
    lineHeight: 15,
  },
  bottomLink: {
    textDecorationLine: 'underline',
  },
  ampersand: {
    textDecorationLine: 'none',
  },
});
