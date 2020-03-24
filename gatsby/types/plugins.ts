export type Plugins = Array<
    | string
    | {
          resolve: string
          options: Record<string, any>
      }
>
