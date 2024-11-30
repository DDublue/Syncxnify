import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		colors: {
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))',
			},
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))',
			},
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				light: 'hsl(var(--primary-light))',
				dark: 'hsl(var(--primary-dark))',
				foreground: 'hsl(var(--primary-foreground))',
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				light: 'hsl(var(--secondary-light))',
				dark: 'hsl(var(--secondary-dark))',
				foreground: 'hsl(var(--secondary-foreground))',
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				light: 'hsl(var(--accent-light))',
				dark: 'hsl(var(--accent-dark))',
				foreground: 'hsl(var(--accent-foreground))',
			},
			neutral: {
				light: 'hsl(var(--neutral-light))',
				medium: 'hsl(var(--neutral-medium))',
				dark: 'hsl(var(--neutral-dark))',
			},
			highlight: {
				DEFAULT: 'hsl(var(--highlight))',
				light: 'hsl(var(--highlight-light))',
				dark: 'hsl(var(--highlight-dark))',
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))',
			},
			transparent: 'transparent',
			current: 'currentColor',
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			chart: {
				'1': 'hsl(var(--chart-1))',
				'2': 'hsl(var(--chart-2))',
				'3': 'hsl(var(--chart-3))',
				'4': 'hsl(var(--chart-4))',
				'5': 'hsl(var(--chart-5))'
			}
		},
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      fontFamily: {
        'geist-sans': ['"Geist Sans"', 'sans-serif'],
        'geist-mono': ['"Geist Mono"', 'monospace'],
      },
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
