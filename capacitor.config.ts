import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "biorhythm-calculator",
  webDir: "build",
  server: {
    androidScheme: "https",
    //live reload configurations
    // url: " http://192.168.1.4:3000",
    // cleartext: true,
  },
};

export default config;
