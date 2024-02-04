/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily:{
        hanken:["hanken"],
      },
      colors:{
        Paleblue: 'hsl(221, 100%, 96%)',
        Lightred:{
          default:'hsl(0, 100%, 67%)',
          light:'hsla(0, 100%, 67%, .2)'
        },
        Orangeyyellow:{
          default:'hsl(39, 100%, 56%)',
          light:'hsla(39, 100%, 56%, .1)'
        },
        Greenteal:{
          default:'hsl(166, 100%, 37%)',
          light:'hsla(166, 100%, 37%,.2)'
        },
        Cobaltblue:{
          default:'hsl(234, 85%, 45%)',
          light:'hsl(234, 85%, 45%,.2)',
        },
        White: 'hsl(0, 0%, 100%)',
        slateblue:{
          'light':'hsl(252, 100%, 67%)',
          'dark':'hsl(241, 81%, 54%)',

        },
        Violetblue: 'hsla(256, 72%, 46%, 1)',
        Darkgrayblue: 'hsl(224, 30%, 27%)',

      },
      
      
      
    },
  },
  plugins: [],
}

