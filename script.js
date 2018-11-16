	function texto_aleatorio(){
		var textos = new Array()
		textos[0] = "Me lo contaron y lo olvide, lo vi y lo entendi, lo hice y lo aprendi. Confucio."
		textos[1] = "Desarrolla una pasion por aprender. Si lo haces, nunca dejaras de crecer. Anthony J. D'Angelo."
		textos[2] = "El aprendizaje no se consigue por casualidad, se debe buscar con ardor y diligencia. Abigail Adams."
		textos[3] = "El aprendizaje nunca cansa a la mente. Leonardo Da Vinci."
		textos[4] = "Nunca consideres el estudio como una obligacion, sino como una oportunidad para penetrar en el bello mundo del saber. Albert Einstein."
		textos[5] = "Lo maravilloso de aprender algo, es que nadie puede arrebatarnoslo. B. B. King."
		textos[6] = "Mediocre el alumno que no supera a su maestro. Leonardo Da Vinci."
		textos[7] = "El aprendizaje es un tesoro que seguira a su propietario para siempre. Proverbio chino."
		textos[8] = "No conocer es malo; no desear conocer es aun peor. Proverbio africano."
		textos[9] = "Camina siempre por la vida como si tuvieses algo nuevo que aprender y lo haras. Vernon Howard."

		aleat = Math.random() * (textos.length)
		aleat = Math.floor(aleat)
		document.write(textos[aleat])
	}
