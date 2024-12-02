
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNHexagonswissReactNativeIubendaTcfSpec.h"

@interface HexagonswissReactNativeIubendaTcf : NSObject <NativeHexagonswissReactNativeIubendaTcfSpec>
#else
#import <React/RCTBridgeModule.h>

@interface HexagonswissReactNativeIubendaTcf : NSObject <RCTBridgeModule>
#endif

@end
