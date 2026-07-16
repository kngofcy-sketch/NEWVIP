declare module "react" {
  export function useMemo<T>(factory: () => T, deps: unknown[]): T;
  export function useState<T>(initialState: T): [T, (value: T) => void];
  export function useEffect(effect: () => void | (() => void), deps?: unknown[]): void;
  export const StrictMode: (props: { children?: unknown }) => any;
}

declare module "react-dom/client" {
  export function createRoot(element: Element): {
    render(children: unknown): void;
  };
}

declare module "lucide-react" {
  type IconProps = {
    className?: string;
  };

  export const ArrowLeft: (props: IconProps) => any;
  export const ArrowRight: (props: IconProps) => any;
  export const BadgeDollarSign: (props: IconProps) => any;
  export const Check: (props: IconProps) => any;
  export const CircleCheck: (props: IconProps) => any;
  export const Crown: (props: IconProps) => any;
  export const Eye: (props: IconProps) => any;
  export const EyeOff: (props: IconProps) => any;
  export const Gem: (props: IconProps) => any;
  export const Instagram: (props: IconProps) => any;
  export const Layers3: (props: IconProps) => any;
  export const Loader: (props: IconProps) => any;
  export const LogIn: (props: IconProps) => any;
  export const LogOut: (props: IconProps) => any;
  export const Menu: (props: IconProps) => any;
  export const Mic2: (props: IconProps) => any;
  export const RadioTower: (props: IconProps) => any;
  export const Rocket: (props: IconProps) => any;
  export const Shield: (props: IconProps) => any;
  export const ShieldCheck: (props: IconProps) => any;
  export const ShoppingBag: (props: IconProps) => any;
  export const Sparkles: (props: IconProps) => any;
  export const Star: (props: IconProps) => any;
  export const Tv: (props: IconProps) => any;
  export const Workflow: (props: IconProps) => any;
  export const X: (props: IconProps) => any;
  export const Zap: (props: IconProps) => any;
}

declare module "react/jsx-runtime" {
  export const jsx: unknown;
  export const jsxs: unknown;
  export const Fragment: unknown;
}

declare module "vite" {
  export function defineConfig(config: unknown): unknown;
}

declare module "@vitejs/plugin-react" {
  const react: (options?: Record<string, unknown>) => any;
  export default react;
}
declare namespace JSX {
  interface IntrinsicElements {
    [elementName: string]: Record<string, unknown>;
  }
}



