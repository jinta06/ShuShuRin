/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#2C2C2C',   // エレガントなダークグレー
          secondary: '#F8F6F3', // 上品なオフホワイト
          accent: '#C8A882',    // 洗練されたゴールド
          gold: '#D4AF37',      // リッチゴールド（ロゴ用）
        },
        primary: {
          50: '#fafafa',    // エレガントホワイト
          100: '#f4f4f5',   // 上品なライトグレー
          500: '#2c2c2c',   // 洗練されたダークグレー
          900: '#1a1a1a'    // ディープブラック
        },
        accent: {
          50: '#fefcf3',    // シャンパンホワイト
          100: '#fef3e2',   // ライトゴールド
          500: '#c8a882',   // エレガントゴールド
          900: '#8b6914'    // リッチゴールド
        },
        sophisticated: {
          50: '#f8f6f3',    // 上品なオフホワイト
          100: '#f1ede8',   // ソフトベージュ
          500: '#a0957d',   // モダンタープ
          900: '#5d5346'    // ダークタープ
        },
        neutral: {
          elegant: '#FAFAFA',   // エレガントな背景
          sophisticated: '#F4F4F4', // 洗練された背景
          charcoal: '#3A3A3A',  // 上品なチャコール
          50: '#fafafa',    
          100: '#f4f4f4',   
          500: '#6b7280',   // ソフィスティケートグレー
          900: '#1f2937'    
        }
      },
      fontFamily: {
        sans: ['Noto Serif JP', 'Crimson Text', 'Georgia', 'serif'], // スタイリッシュな明朝体ベース
        display: ['Noto Serif JP', 'Georgia', 'serif'], // 上品で洗練されたセリフフォント
        elegant: ['Inter', 'Noto Sans JP', 'system-ui', 'sans-serif'], // クリーンなサンセリフ
        luxury: ['Crimson Text', 'Times New Roman', 'serif'] // 高級感のあるセリフ
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

