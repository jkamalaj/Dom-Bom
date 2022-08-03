let container=document.createElement("div")

 container.classList.add("bom-dom")

let row=document.createElement("div")

let col_lg_12=document.createElement("div")

let col_lg_4_1=document.createElement("div")

let col_lg_4_2=document.createElement("div")

let col_lg_4_3=document.createElement("div")


container.classList.add("container")
row.classList.add("row")
col_lg_12.classList.add("col_lg_12")
col_lg_4_1.classList.add("col_lg_4_1")
col_lg_4_2.classList.add("col_lg_4_2")
col_lg_4_3.classList.add("col_lg_4_3")

container.append(row)
row.append(col_lg_12)
col_lg_12.append(scss)
scss.src="./style/main.scss"
row.append(col_lg_4_1)
col_lg_4_1.append(scss)
scss.src="./style.main.scss"
row.append(col_lg_4_2)
col_lg_4_2.append(scss)
scss.src="./style.main.scss"
row.append(col_lg_4_3)
col_lg_4_3.append(scss)
scss.src="./style.main.scss"

