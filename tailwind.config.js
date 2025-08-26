/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7f0',    // 温かいクリーム
          100: '#fed7d2',   // やわらかなピンク
          200: '#fbb6ce',   // 淡いピンク
          300: '#f687b3',   // 中間ピンク
          400: '#ed64a6',   // 濃いピンク
          500: '#e53e3e',   // 冒険的な赤（アクセント）
          600: '#c53030',   // 深い赤
          700: '#9c2626',   // より深い赤
          800: '#742a2a',   // 深い赤茶
          900: '#553c3c'    // 最も深い赤茶
        },
        secondary: {
          50: '#f0f9ff',    // 空のような青
          100: '#e0f2fe',   // 薄い青
          200: '#bae6fd',   // ライトブルー
          300: '#7dd3fc',   // 中間青
          400: '#38bdf8',   // 明るい青
          500: '#0ea5e9',   // 自由な青
          600: '#0284c7',   // 濃い青
          700: '#0369a1',   // より濃い青
          800: '#075985',   // 深い青
          900: '#0c4a6e'    // 最も深い青
        },
        warm: {
          50: '#fffbeb',    // 温かいアイボリー
          100: '#fef3c7',   // 薄い黄色
          200: '#fde68a',   // ライトイエロー
          300: '#fcd34d',   // 中間黄色
          400: '#fbbf24',   // 明るいオレンジ
          500: '#f59e0b',   // 元気なオレンジ
          600: '#d97706',   // 濃いオレンジ
          700: '#b45309',   // より濃いオレンジ
          800: '#92400e',   // 深いオレンジ
          900: '#78350f'    // 最も深いオレンジ
        },
        neutral: {
          50: '#fafafa',    // ほぼ白
          100: '#f5f5f5',   // 薄いグレー
          200: '#e5e5e5',   // ライトグレー
          300: '#d4d4d4',   // 中間グレー
          400: '#a3a3a3',   // グレー
          500: '#6b7280',   // やわらかなグレー
          600: '#525252',   // 濃いグレー
          700: '#404040',   // より濃いグレー
          800: '#262626',   // 深いグレー
          900: '#111827'    // 最も深いグレー
        }
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      screens: {
        'xs': '320px',      // 最小スマートフォン
        'sm': '375px',      // iPhone SE
        'md': '390px',      // iPhone 12/13
        'lg': '414px',      // iPhone Pro Max
        'xl': '430px',      // 大型スマートフォン
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

