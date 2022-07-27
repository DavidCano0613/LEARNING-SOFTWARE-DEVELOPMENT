use escuela

--Tabla carrera
create table carrera(
clave_c int,
nombre_carrera varchar (40),
duracion_carrera float (3),
constraint pk_cc primary key (clave_c)
)

create table materia(
clave_materia int,
nombre_materia varchar (40),
creditos_materia float (10),
constraint pk_cm primary key (clave_materia)
)

create table profesor(
clave_profesor int,
nombre_profesor varchar (40),
dir_profesor varchar (100),
tel_profesor bigint,
hora_profesor datetime,
constraint pk_cp primary key (clave_profesor)
)

create table alumno(
clave_alumno int,
nombre_alumno varchar (40),
edad_alumno int,
semestre_alumno int,
genero_alumno varchar (25),
clave_c1 int,
constraint pk_ca primary key (clave_alumno),
constraint fk_fc1 foreign key (clave_c1) references carrera(clave_c)
)

--Tabla intermedia alumno-Profesor

create table alu_pro(
clave_alumno1 int,
clave_profesor1 int, 
constraint fk_fa1 foreign key (clave_alumno1) references alumno(clave_alumno),
constraint fk_fp1 foreign key (clave_profesor1) references profesor(clave_profesor)
)

--Tabla intermedia alumno-materia
create table alu_materia(
clave_alumno2 int,
clave_materia1 int,
constraint fk_fa2 foreign key (clave_alumno2) references alumno(clave_alumno),
constraint fk_fm1 foreign key (clave_materia1) references materia(clave_materia)
)

--Table intermedia materia-profesor

create table mat_profe(
clave_materia2 int,
clave_profesor2 int,
constraint fk_fm2 foreign key (clave_materia2) references materia(clave_materia),
constraint fk_fp2 foreign key (clave_profesor2) references profesor(clave_profesor)
)

