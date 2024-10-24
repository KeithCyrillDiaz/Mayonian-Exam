import { GameProvider } from "./MockData";

export const CarouselImages = {
    backgroundURL: "https://s3-alpha-sig.figma.com/img/9c92/77aa/270977de445b1d1d216031819eb6fd17?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GDlN4ih5RH8D0cKhGQUtQCpl-4QPpYrbtNhzKCq5ZxaurebIjkCYI5nfI3Mc0aeExmEWfPOT9tL~sanRa0o9nDMoAzquaad8EP8c9ExKiEzbttJFjC-EA-y8R-5Z4OWhX2ITrHW-aV~FooC4VYudJE0T62iNgqWBm-DQaeACPYfd9damINJLU-kVzBEv6Td8YDRxUgnCtGJrhhoDpXZ~AmPMO0bNhEyt0zF2AfGMAPaJb~O98Xk7KFsu8lMhi32lLOp5Sf~gP6VLzX1bQmmLGQ1ewD7beiOjeYfMTeV1oTa76SL5b~45jLwTsq6VFyfBwbnyg3QfJ9jd3i4kFXoazw__",
    circleLightning: "https://s3-alpha-sig.figma.com/img/2e12/0687/94830a60dea0b10fc11e7f48a24f40e5?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OR5FVatdWXK9fLNkxVEUXi6IP6ELX-IqxN9kBKHtuCfmPYsjvqn6uEHXqDMzcNYfSh7wN4tKU3kz2-lnHZqZabU2Rs4Zc2bLcDTP~2b8dqtggsu6QyskjwqlbIkRR2RTgcetZGls4KPqdczpyDkxmO5ci-ieqtEwg3OXWwLpCgMSIM27-xFsYLagym3LG~8s4A64abCOyOn1igUSUafO9nsl8wsmF5FT9ev~NzF~3TPIHbw9wbeNZ1iRMgF6AtLCJf8lbzvMzwvowrMPRzIJwkNwj5cCTxpxi0W4mR9~BX5ut9bH7fsPgRLMzIKmzCSwnsfltT-FLJwcyjYr7fHxWw__",
    character: "https://s3-alpha-sig.figma.com/img/383e/a553/bccba1cbf11a537e34fd80ef6980d62a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dILYQclAaTlB5KToevAU8kxusXzEfUVVOVWYPJyHYvk-vQ5vxLhLFvrSpMBJwU76TEctyotbFHgIfcO7ExUZcdh9pW2ldRQSs8gPbgYMSdN0GrVr9gT6H6l6Ddq0YBst1K3fQEpFSzvKM9AGkzfjhRI6HdQEmE3tmXBaSCEDzGhN~xkNHQIasnowe9nfAfFliIwNQyAcoRU24wb2AIfPKoycE5RqfQ3ciSpkbVyZWbvEjWHdRlI95YYYatV-Cxl0-QF2R6ea4nlvrPvwNd80mYT6GOelpVE5LtuOryuTVjUhUqlEdv0I69GVuHfGsS6B~o1DhAWqMeZODy7VQLkf6g__",
    coins: "https://s3-alpha-sig.figma.com/img/b080/c53d/bd85b5eae2f2da8df6e9805892cc8a89?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KAuuPx5qmbK8MzO4CZ7zmng-m18J6xdz-NRz0Qk7n0kJ~J9wNmxyLEtvQhvNlNodsIrHC8cjDeVFNARfgq8xYy4U7ZAghxdJX8HtEqM9Py7iWxMD02JHMVmW34YKdE97yBx70QGxIOf567T36TlEXGJXSGjmjGJLkIDj86hxmry255Xpn6AGnbH7hsOj4ltIuIq-XjQvxxpqK1egwKEQzvLZkMORyoFs7L6fxtv5rjvvllZlAkYbHxT5ZbYmApTqQz8-XtaF3Q5y8vQEV2G6PdShu21OZ69jnHVt7tNRdN8Uzs6Vgnk-rAfPyzJu7KWBhx-UlNZuIZ6kMxDcXcXUKw__",
    castle: "https://s3-alpha-sig.figma.com/img/64ac/a322/24967307c08ebfdc2f88e8ededb28f35?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iyS3huUo1~b8IEVSORLe9e0IXJT3V9uSJhGLQsT65cyFDoxJhOrbOgWlnvBsQe0wrfzal9u05lB8MRuGRslFfBMhiPmgXntQvr~PalNCu02uI-6ux4xtGoXBRZHCsVpMebAmXjywDXkpsQ~r3Xn3dntX~9NiQhX-mVZaDRNm2JflytKCpddGzfeqifb5v6EJ7k556eRmSUlXZ35cgT2zD-MHNhCxkzw5U8O8CjY0AMQBhbbqx~80NeuW2WY1V5s3KzmtRtNVeTbcLtJYYfNU3JGx4zJ~fv9rtpE~SfLxQOBsPkz1AtQyOharYiUIW8m1aPxVU5mIimhJ1Txb7XKJtA__",
}


export const defaultColors = {
    "defaultBlue": "#00A6FF",
    "defaultGray": "#888888",
    "defaultYellow": "#FFD600",
}


export type GameProviderLogo = {
    title: GameProvider;
    logoUrl: string
}

type GameProviderLogosTypes = GameProviderLogo[];
    


export const GameProviderLogos: GameProviderLogosTypes = [

    {
        title: "Pragmatic Play",
        logoUrl: "https://s3-alpha-sig.figma.com/img/0cf6/d3a2/0a9cb8b7886164b5342bef030028339f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TAerWHmYSg8HZNerJxBqXLZ8A1N1FXWo~lICQaREACsJOBOQNpp~V9hSinnmKMWLK1TnZS1mYOb-1eTbACNpkyWZIGnkSjtZ-ayFOvoVdi4HpzjbqedRf5NkwU5iXuQxdPBzqWe5QQpREEEv6JPu4op1wCnhUs2kJh1ERjsJHPPFCo0ngEb8FDU~lGFZN9tZCNz40RQkOT4jnY98fPp5aNMXlemXV7B1LfPQiRP8TaO6xPCIZA2r4n6WHfvyeltG849zv3lgjDbp7eFSS2TIOR4wbfax1nrR1famBXFpvYrbPttJBelxfBuLtupjQFYhNp9luxgU4~0BW~52L-EYPg__",
    },
    {
        title: "Every Matrix",
        logoUrl: "https://s3-alpha-sig.figma.com/img/4e84/3a25/731d90f629f80f335c3cc98c98a83851?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SY9F-8RRc96VlK0L4MEVXFku6V2PL-677yF9gH8JkZnZL-pH-7q3RTGylMUDUV4tRBRmWT5zRqsXMdoXKnCZnxrYhFShCKd0uVurFU4RcM0usr1Sgzo0CK4ROWkpmAP9TZ9Ho0ngzcS4m22sn61Bg9YcQK-ytG5mc~VmOn1siO6ROItsiNV426y1678Vdnn0U5Dx5YVcqo4rr-Zuc5-TXvcRcQ4LCI3X074blNww0emXLKc0YbmzYiKWSDGGuMDx0szH1jP-~9Mb10O5mTl8Y9oqp5rHyVOTu85PX-5CVzKQnUTvYBB7Rt6V4E3jYyYyS~~O3i2fSO2we~mW9eMqhQ__"
    },
    {
        title: "Evolution",
        logoUrl: "https://s3-alpha-sig.figma.com/img/a2d7/1355/68f5e1d2c76cdfab3123de274cf76361?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OL1e5xgWWKYNGzZag-7aO~oSDYqWxVq77Q~tSHlLQHxvMO60IE0vK4BtZz44fYlQ-QHIyEtqOc3O-V6bYNc0Gs3PVoEMwFyCgQfmQrZ0FznXWan-FkKJlMObZSiS6xzc8U2-ewjocx7CGTue75nrfSXq2axkTLPzOoQZXKU5pWYU-lRgkRw9xu33RFn36JmApxrOqGFwWrJgl4CQLu8WyG4LHVxe-2twhhcrNbrYylFYjS-B-hzzGL48VIIcJB7aDNZ~P3rXmDtjV7JIcRsTlrYVRsGpSzNWrI9WR6ft1ctuhTUISrkDZW-SrXVMAzb4Bf9jBO~uNDIZWisI9lyRBg__",
    },
    {
        title: "Expanse",
        logoUrl: "https://s3-alpha-sig.figma.com/img/9c97/461e/d70b98712bc05dfa9b6e83d8bcdbc8aa?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gpXYb1r2APLTRrQvzzexVHx8ntoZGAVP6vEAGcIHdBQWj9lfXQtEY2byQTM~DTe8FOWmqtnwpivBypyrlw~qEOKPsnbthhnJTfAni~WNj0Bnj1hIPvXQkAG6CZ5A6LaIJZtLuvL81~eoQHymab5hAaOVigdblmSq6GoIYG3sbMRQBh9jK-QQ8wUIUwegGVVXRnCI56bcrHBXNFUfcEhH0kHxL~yd7mFFVAB0pqfohAjagmJ~y6MW2o9LD4GANvJ4ZndPIN7h7BkP0m5zosSrODhZdp057DbP2i8-X~DlMUV6588P3X9WkdA~K77UcfJVJQ0vw1wT5GMOMWfLbWKGyA__",
    },
    {
        title: "Ezugi",
        logoUrl: "https://s3-alpha-sig.figma.com/img/62b8/db97/7694cc663084abb41fdbad4b80e9db77?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M8owbh-aLADdGHN8Da9ZNoP6H487vZ6xLu-AbRc7GIixIakAxYa19X88Ad5SDAZlElDLQTcu92LeumzKkYY0OA745uJnDSmDLkSclRGxlmKZc7jWtxUiUK5AkYrEkAsf9RJETPIC3wGCLvlpf-W8fsRfbZDgQvXetJQudr2v3qVSPSFRebCHsFcH6E8qPqjilMu6NYBGh3cdic-ka97LuhwnQns0uiiYF1QwktAtS2j32VuUyjEBtRS25ixNEm4gC1P5Pswh7eAaOkiPoKMjXyKZYATFwZaTc70ztfhfEvcq3CNScg5Aom-MqlouterAnUY214tiD9FaVja4Rh9z2g__",
    },

    {
        title:  "GameArt",
        logoUrl: "https://s3-alpha-sig.figma.com/img/b79b/d4a7/a37f0afc369454d060895ef71d058ffe?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ES37H8ALlbXPDDkYvkkJjFZx9l0LyZnfZRCs7rWKS7qS0KtowrbRNRb31oHOz3HsZsZyJYLOnnOtrhYeFjygWkp3rSd2M-JKa9lB3xfSqbJ4ncHZu19oSpsY05iAzTAScgDovm7TDR7H-R72lxoKQmyzCV~VCu~mZFDmKhCXDL36gHaKk0gN-ZvdWQQv3CjU9G9xdHMr1sN6h1N8qUIiC8MvLNTKpOKQP0QYaJ3zChcIz1kwVwP0oxDajwIoSOXpjuxhw69kOgAfd1S66t2fgVVk10LEL7myDW050s5wUG3q3H2RgO0HK3XJEkxGlT4fO~TKwk~nwj8Rt66cbinxuA__",
       
    },

    {
        title:   "Habanero",
        logoUrl: "https://s3-alpha-sig.figma.com/img/d5f1/53b4/6a4d1ceb4e22df0a1ab54f969eabfc11?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FxgDPKLT8~aPFYgGa5bGHI8p8CXOFuqFXNc7e7zZWnFcNPoaYmSxOvcFcwdv7MGnhNDtqvZLs6r-km7-UUZ6wi8Y4hxYQm3x0z9xhvk1-tnMd3zlOT-cRQgErIjLALfUIamEATp2R8HS8fUyB7qV7HhHkxFQ3mPEpIKD7zQPp7BCldHdAVJ4ooyd3Y7Spe1bnwcdg2SYtgP6CDZDx90LqdOHg5BOA8mcXglBrgZrB3YgeCSMZAIYZx3ZPE58jZiMaxm-RqgDDGrJa7JoPsB17paxGKLPL~CGrXiS7u23XDrrpHRQTM1mK7jsrkb-OjR-Z4LjX77ZY4O5O2SMNOlcbQ__",
    },

    {
        
        title:"Hacksaw Gaming",
        logoUrl: "https://s3-alpha-sig.figma.com/img/2e64/cc7d/79178c69d8841a7bbdd4d9a1ca4f51a5?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h696PdN3MXF5XkfZcS-GlRAY23SQiv2I5B32iWh2AF8oTcW86frIjuD0gGQfSTBME7SzSnX-rB4de9JLhsNvxo2aIdttyValhCvbkMcF1TiX4b8jBHO3qeGkDI5KCWpQw0IYh8uD9MLlDH-tv~Dtgo2QLxxsCPdK7dVvElQy~nUqNudomJ4WoLLL9QnT3fig1~MzCrlsm56QiZIOB75HvIvNt1EDr-8qUQ4HQlJVLFSnKG-ac4El4Z7TIdDVXGxiBuorD816whGeLKFyn04wKZFDC8hnRCctUklBppFXLM9llRNP3YQN0RuWHFwRXmpNpOEGjz9y-5CIxsja0nxKjg__",
    },

    {
        title: "Inbel Games",
        logoUrl: "https://s3-alpha-sig.figma.com/img/18ca/8aca/28f548a0d814726bc2ecc0ed1be13f10?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TcokzM-Qh1-kahqxTRytaCKKpefzhQm1ka0xzs7LYOFnAdkuKiS5~EwCBQHLKNwT4rFU~PTLj6XmnnC50wFEqh4iSVue2RZjyWPe-d-nl-gpF77pweaJisj7HI92fJ8tXPjntSne321mRY-30XxWEZadsbJAaj~W85HwST6vedvpoEjt478ABh3FdLIFHl~BHxCJlvK5Ll5XjK2vTsd9zg1f4cFoIbD3gyv2RxTKAJfTbG2DwU91cWP-rMBzU6-~MYXbfN6tu~9EMCyOUCbnej2VmoIii7-ni3ihU9kjZu3j5U1tNmQ2llGt-4xMPRvWc2D6IavMlCTKY1RPmNArng__",
   
    },

    {
       
        title: "M Play",
        logoUrl    : "https://s3-alpha-sig.figma.com/img/39c4/4923/b7e87811f55363dbde398a9f4ddca04b?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lr1smeBgmFQ4xJMN1iJQRZvALHbLBg5OTMW2ZbdG8BIi38wfNrJRDtosh1dXjhgHwnMxZrZ9qY8ex2PRIWg1SUAhP0~RPVZskwCoyWLGX9aSaJvVdroi4n1qK1cSWcUF-DeSSW4ybdLhqXLa~mI9Ggkn8WRwHd-PjfbHHr2xXu5ehjaZSnX6NjJSAx299S8eaylhK34VS0IUwd6En7O5joSSsbxpFj~htqhok0HiC1W-vp~5T~q342fttpGix3~F6fRzCkEB3rdNJJ3uRiQ3Cj9MPxouithenc1r~byIAYWhA88dXCaYM5ra4zzIegv1M8PUsJ1eX-tV9n05Vo2L9Q__",
    
    },

    {
        title:  "Net Ent",
        logoUrl: "https://s3-alpha-sig.figma.com/img/8a65/2302/57a928419052ddce0ea06983d836a55f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nztF4r8TKAWXhImTPZmlp0pr6sjXhYv7e59rGqijS-D3CpLjQyE83QA~crgnkShDXgeRkB4bsRjDYTcDr44dSuEP0sXS8lf-9bbk0VAy-cAbQmceqAr303B1tS5Gg77HvrCk5xxuJ4ZHVOF-v8sd0wFja2n0G5xetGtSvYEW7nl~YefmIOPYPsQu-q6fhn3dFCBEfQHqYyygt8iZ2a9WWmjQ4nXYZzOkTdJqkKKGD-9NeuzT7z-mRE-MgPkCMi6BuCZLRvCNWthg-IbktrcXcawtl4ZZUu1XaeX0vemngJY1dZYkSSrRpGzC3ZXNdLCvqIG6N9k8qQTuOoyG9RMWpg__",
      

    },

    {
        title:"PG Slot Games",
        logoUrl: "https://s3-alpha-sig.figma.com/img/137f/80f2/ba355ab0989cb917dde4466bee9d1884?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EYfX-b~mCCGC8MCyQ1WfFMBQ27U7QAmB~25Qt1x5d7q~wQ-3G1wHRejKP6oP6YVdv1~aQn0T6hsSYGBV2BtjxGkxsRETl460S9Q7TfjFLF75ujVW01~nAGmt4Bed5HAsAPCykzevQlzpnns55Ziho-yWs0~wEK2OmenbIWfBNriU0uSP2FPKVLqNekUAgVYCauxGgPdHUHtGnD3XYvu0TKzIdLW6mc5Kz1F4n-PEp7ZsXSjhdDfnY9aPDaMZ9PtDcYg51NENheT4RZfOY0rl1206Z6wI5WdVzX~pmXY4OxkwkVAkjdy1FUAGH8lp1yseb2QV54~ye8R9Tg9cnuqk5A__",
    
    },

    {
        title: "Play N Go",
        logoUrl : "https://s3-alpha-sig.figma.com/img/fc43/bb81/7fad1154ce745254c17b83a567417a1d?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WWKKlggn42zncBnc2OW0JUCH7MSa~knKHWdqpWOzeTdh6YkyCvhPGrNkEDzYgaw0XoHGzknvxu9A69U2rnoMdGkcV0gCiAqX6d8NiLfTPsigcfnbLcFGxVzHEmRfrwAS~kBY-RwVhQ8xgGWohVmbJZK8v~3tpvxDe9yKFU9jNlFCntUUwSJWmUe2OYux4uma4GsLgBpwLBQsjXOBmcdB69KCJxfb7SY59WW3l1JqE6bN7gI1f9WDOhwEy8-BxRANcXRRDPXvFQ~1VlxHj-DiU0iqmNRfm25tAkz5uiFUkQq98LxyTRKKr05ofJ6nJc9~HQdJegBf9vMerR-mQZkz6Q__",
       
    },

    {
        title: "Play Son",
        logoUrl: "https://s3-alpha-sig.figma.com/img/05d9/6a5a/4f21227a94caf0ba77ffbf7a38b42e10?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YSZ0yUh5TNCGfb9B3WqtBGbJWL2abyVITNMPcvdyHcM1uPe3vEiGAT-wMQJwlwMDxb3GlZBcLXZAcgP08i1YBzkLIyVt11j7DNO-I128RjFRmU117o6olEuvJ4yBAJeOpn5A6zH-DiBTPjozmmnhWOkBDyP1Q31dHtud8E3k5rqOeQbv1B7fymNDz7gAbl0-xEKeKJ5AFzglrfhty8mvlfZMNr~4N7DXXkujGI7OFLMVYKFV7vwdh2av8GY0YFskjURvGk1PNwp38IwmCgzTuMcAYj1qcaChZspPUADEwROaGEjyol-b3u5lxbzHtlar62MofoG7BZWLitgQ58ndmA__",
       
    },

    {
        title:"playTech",
        logoUrl: "https://s3-alpha-sig.figma.com/img/1728/4836/0bf9ac011c75b874975a78ca9be9786d?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VNmrISXbZhDUg7r2ulYRwzEHiGY5JXSoSX0uusV5tzNj6rwcYvwH0s3nVk38LKx0TdQnpTW89xUabwg5Wrhx6sPT82IN1CrkUlEf8h9bjhuL~kf3E5zi4u6gYJGKrfFGweugM9fkhaLqrb6wufvPkbFocZfnDNeAkFuwvIOhQAHMfTiFWcD6kCo7Ef-lsRwetY3-9y2mszdWK5Cntd1evYAYh7k1jtTEgsyKiI7PHNMqOt0BsYBdpyRojHSKq7J~6VyW2atcSVZ9e1yefIhCswTjC11FsKHA0VYn53ttlbp0dOFM6C2Cdyk~RuONxBPUY~axmkEblay39LSaQlSzsA__",
    

    },

    {
        title:   "Red Tiger",
        logoUrl: "https://s3-alpha-sig.figma.com/img/e88b/36d8/24748fd246d809eb5f0809040de4acf6?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jpnskifyPjArP3Ns9OZ9GYL8wbUZnWmEFknzD-tAVbpR7j8lAPQ~EYL588ZH2WqsZbxaMVZNy0uoTSm09QjRi5PBeZ6YZ~dnDajWyaKdHhUSPGcvgO~Nl7abDppHvPQTc2iECZlMbdnpeKnq37BNNm9736VAQk518kYus-dvLBCdiWLpiL7XZrmZMnTvE6~-B4kDnxyE-fsl2jegl2vbBpPeOwYiByhGdmYx-95B-4lyM3YEDeuLXsigCjJIyLbkC5CqaNCVfpbsFP-eQfN4hKZoCIT2GQ30vLbk0F-5WgbpPb0~SD9Hxr8YX2pXnlqkSxSzvdyG4s~5s7C8orobNw__",
      
    },

    {
        title:  "Relax Gaming",
        logoUrl: "https://s3-alpha-sig.figma.com/img/cc55/0fdc/1f1a9adb7018fb9d6cd6e16d73bbdd97?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m6gJtkeKCNnrcF0T--DCbACVmFnac7c8t2g0gVlqeAZEt6ZgrNyJBgidpOocVCzB240z6~-J32pm9KgUUJRbWSC7XE8mrJDtBn3dvRINZnUEJbziDm2G9qw9fLO5cUM08nBEMN1MddJQy78mjFL2hLPttMKK-t7vgNRdfsaXpLwg-Ei4eMNcuSuN1S7mjUMAczoWobyE1874y2xpQo47BkXdO-xHvd8FQKDJbfD8A8Bmj-kOACUtnjirJgvcO5zcX2WcuoT5LkG4Hjx-PjtlTai69vn0Ti2N6IgAvggCmtWp9oe~Js84P4tiqNeVijftvCoPNdLbsiEKhXgHfJYv4A__",
        
        
    }
 
]


   
    


 
    

    

    

    


  
 

  

   

    

    
   

  

