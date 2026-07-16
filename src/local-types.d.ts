declare module "react" {
  export function useMemo<T>(factory: () => T, deps: unknown[]): T;
  export function useState<T>(initialState: T): [T, (value: T) => void];
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

  export const ArrowRight: (props: IconProps) => any;
  export const BadgeDollarSign: (props: IconProps) => any;
  export const Check: (props: IconProps) => any;
  export const Crown: (props: IconProps) => any;
  export const Gem: (props: IconProps) => any;
  export const Layers3: (props: IconProps) => any;
  export const Mic2: (props: IconProps) => any;
  export const PackageCheck: (props: IconProps) => any;
  export const RadioTower: (props: IconProps) => any;
  export const Rocket: (props: IconProps) => any;
  export const ShieldCheck: (props: IconProps) => any;
  export const ShoppingBag: (props: IconProps) => any;
  export const Sparkles: (props: IconProps) => any;
  export const Workflow: (props: IconProps) => any;
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



