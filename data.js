// Each question: [question, [4 options], correctIndex, explanation]
const UNITS = [
{id:"u1", n:"Unit 1", t:"Differential Calculus", e:"📐", c:"#ffd23f", topics:[
 {id:"u1t1", t:"Leibnitz theorem & nth derivative", notes:"Q1–Q3",
  k:"Dⁿ(uv) = Σ ⁿCᵣ · Dⁿ⁻ʳu · Dʳv. Differentiate the given relation n times, then put x = 0 to get a recurrence.",
  qs:[
  ["If y = (sin⁻¹x)², then (1−x²)y₂ − x·y₁ equals",["0","2","1","−2"],1,"From (1−x²)y₁² = 4y, differentiate and divide by 2y₁ → (1−x²)y₂ − xy₁ = 2."],
  ["For y = (sin⁻¹x)², putting x = 0 in the n-th order relation gives",["yₙ₊₂(0) = n²·yₙ(0)","yₙ₊₂(0) = −n²·yₙ(0)","yₙ₊₂(0) = n·yₙ(0)","yₙ₊₂(0) = (n+1)²·yₙ(0)"],0,"(1−x²)yₙ₊₂ − (2n+1)x·yₙ₊₁ − n²yₙ = 0; the middle term vanishes at x = 0."],
  ["The nth derivative of 1/(x − 2) is",["(−1)ⁿ n! / (x−2)ⁿ⁺¹","n! / (x−2)ⁿ⁺¹","(−1)ⁿ n! / (x−2)ⁿ","(−1)ⁿ⁻¹ (n−1)! / (x−2)ⁿ⁺¹"],0,"Each differentiation lowers the power by one and brings a factor −(power)."],
  ["If y = tan⁻¹x, then y₃(0) equals",["−2","2","0","6"],0,"tan⁻¹x = x − x³/3 + … so y₃(0) = 3! × (−1/3) = −2."],
  ["If y = sinh(m·log(x + √(1+x²))), then (1+x²)y₂ + xy₁ equals",["m²y","−m²y","m·y","0"],0,"Standard result: (1+x²)y₂ + xy₁ − m²y = 0."]
 ]},
 {id:"u1t2", t:"Taylor's theorem (one variable)", notes:"Q4–Q5",
  k:"f(a+h) = f(a) + h f′(a) + h²/2! f″(a) + h³/3! f‴(a) + … Maclaurin is the case a = 0.",
  qs:[
  ["In f(a+h), the coefficient of h² is",["f″(a)","f″(a)/2","f″(a)/6","2f″(a)"],1,"Second term after f(a) and h·f′(a) is h²/2! · f″(a)."],
  ["For f(x) = 2x³ + 7x² + x − 1, f(2) equals",["45","43","53","38"],0,"16 + 28 + 2 − 1 = 45."],
  ["For the same f(x) = 2x³ + 7x² + x − 1, f′(2) equals",["53","45","38","12"],0,"f′ = 6x² + 14x + 1 → 24 + 28 + 1 = 53."],
  ["Expanding x³ in powers of (x−1), the coefficient of (x−1)² is",["1","3","6","2"],1,"x³ = 1 + 3h + 3h² + h³ with h = x−1."],
  ["Maclaurin's series is Taylor's series taken about",["a = 0","h = 0","a = 1","f(a) = 0"],0,"Put a = 0 in Taylor's series."]
 ]},
 {id:"u1t3", t:"Asymptotes (Cartesian & polar)", notes:"Q6–Q10",
  k:"Oblique: put x=1, y=m → solve φₙ(m)=0, then c = −φₙ₋₁(m)/φₙ′(m). Polar: solve 1/r = f(θ) = 0 → r·sin(θ−α) = 1/f′(α).",
  qs:[
  ["An asymptote parallel to the x-axis is found by equating to zero the coefficient of the highest power of",["x","y","xy","the constant term"],0,"Coefficient of highest power of x = 0 gives y = constant lines."],
  ["For oblique asymptotes y = mx + c, the slopes m come from",["φₙ(m) = 0 (highest-degree part)","φₙ₋₁(m) = 0","c = 0","φ₁(m) = 0"],0,"Put x = 1, y = m in the highest-degree terms and solve."],
  ["For y³ − 3xy² − x²y + 3x³ + …, φ₃(m) = m³ − 3m² − m + 3 = 0 gives m =",["1, −1, 3","1, 2, 3","0, 1, 3","−1, −3, 1"],0,"m²(m−3) − (m−3) = (m²−1)(m−3) = 0."],
  ["For the polar curve r = 2a/(1 + 2cosθ), the asymptote directions satisfy",["cosθ = −1/2","cosθ = 1/2","cosθ = −2","cosθ = 0"],0,"1/r = 0 ⇒ 1 + 2cosθ = 0."],
  ["The asymptote parallel to the y-axis of y²(2a − x) = x³ is",["x = 2a","y = 2a","x = a","y = 0"],0,"Coefficient of y² is (2a − x); set it to zero."]
 ]},
 {id:"u1t4", t:"Radius of curvature", notes:"Q11–Q13",
  k:"Cartesian: ρ = (1+y₁²)^(3/2) / y₂. Polar: ρ = (r²+r₁²)^(3/2) / (r² + 2r₁² − r·r₂).",
  qs:[
  ["Cartesian radius of curvature is",["(1+y₁²)^(3/2) / y₂","(1+y₁²)^(1/2) / y₂","y₂ / (1+y₁²)^(3/2)","(1+y₁)^(3/2) / y₂"],0,"Standard formula."],
  ["Radius of curvature of y = x² at the origin is",["1/2","2","1","0"],0,"y₁ = 0, y₂ = 2 → ρ = 1/2."],
  ["Radius of curvature of √x + √y = 1 at (1/4, 1/4) is",["1/√2","√2","1/2","2√2"],0,"y₁ = −1, y₂ = 4 → ρ = 2^(3/2)/4 = 1/√2."],
  ["For the cardioid r = a(1 + cosθ), ρ equals",["(4a/3)·cos(θ/2)","(4a/3)·sin(θ/2)","(2a/3)·cos(θ/2)","(4a/3)·cosθ"],0,"Simplify (r²+r₁²)^(3/2)/(3a²(1+cosθ))."],
  ["The polar formula for ρ is",["(r²+r₁²)^(3/2) / (r²+2r₁²−r·r₂)","(r²+r₁²)^(3/2) / (r²−2r₁²+r·r₂)","(r²+r₁²)^(1/2) / (r²+2r₁²−r·r₂)","(r²+r₁²)^(3/2) / (r²+r₁²−r·r₂)"],0,"Standard formula."]
 ]},
 {id:"u1t5", t:"Centre of curvature", notes:"Q14–Q15",
  k:"x̄ = x − y₁(1+y₁²)/y₂ , ȳ = y + (1+y₁²)/y₂. The centre lies on the normal at distance ρ.",
  qs:[
  ["The x-coordinate of the centre of curvature is",["x − y₁(1+y₁²)/y₂","x + y₁(1+y₁²)/y₂","x − (1+y₁²)/y₂","x − y₁/(1+y₁²)"],0,"Standard formula."],
  ["For y = x² at (1/2, 1/4), the centre of curvature is",["(−1/2, 5/4)","(1/2, 5/4)","(−1/2, −5/4)","(3/2, −3/4)"],0,"y₁ = 1, y₂ = 2 → x̄ = 1/2 − 2/2 = −1/2, ȳ = 1/4 + 2/2 = 5/4."],
  ["The centre of curvature lies along the",["normal","tangent","x-axis","y-axis"],0,"It is at distance ρ from the point, along the normal."],
  ["The circle with the centre of curvature as centre and radius ρ is called the",["circle of curvature","auxiliary circle","director circle","nine-point circle"],0,"It hugs the curve most closely at that point."],
  ["For y² = 4ax, the centre of curvature has x̄ =",["3x + 2a","3x − 2a","x + 2a","2x + 3a"],0,"x̄ = 3x + 2a, ȳ = −y³/(4a²)."]
 ]},
 {id:"u1t6", t:"Envelope & evolute", notes:"Q16–Q18",
  k:"Envelope of Aα²+Bα+C=0 is B²−4AC=0. Otherwise eliminate α between F=0 and ∂F/∂α=0. Evolute = locus of centres of curvature = envelope of normals.",
  qs:[
  ["The envelope of y = mx + √(1+m²) is",["x² + y² = 1","x² − y² = 1","x² + y² = 2","y = x"],0,"B² − 4AC = 0 gives x² + y² − 1 = 0."],
  ["If a family is Aα² + Bα + C = 0, its envelope is",["B² − 4AC = 0","B² + 4AC = 0","A² − 4BC = 0","B = 0"],0,"Discriminant condition."],
  ["The envelope of y = mx + am³ is",["27ay² + 4x³ = 0","27ay² = 4x³","y² = 4ax","4ay² + 27x³ = 0"],0,"x + 3am² = 0 → m² = −x/3a, y = (2x/3)m → y² = −4x³/27a."],
  ["The evolute of a curve is the envelope of its",["normals","tangents","asymptotes","chords"],0,"Also the locus of its centres of curvature."],
  ["The evolute of the parabola y² = 4ax is",["27ay² = 4(x − 2a)³","27ay² = 4(x + 2a)³","27ay² = (x − 2a)³","4ay² = 27(x − 2a)³"],0,"Eliminate x, y from x̄ = 3x + 2a, ȳ = −y³/4a²."]
 ]}
]},

{id:"u2", n:"Unit 2", t:"Multivariable Calculus", e:"🧮", c:"#7cc4ff", topics:[
 {id:"u2t1", t:"Limits & continuity", notes:"Q19–Q21",
  k:"Limit exists only if it is the same along every path. Continuity at P: f defined, limit exists, limit = f(P).",
  qs:[
  ["A limit of f(x,y) at (0,0) exists only if",["it is the same along every path","it exists along the x-axis","it exists along y = x","f(0,0) is defined"],0,"Two different path-limits prove the limit does not exist."],
  ["For f = xy/(x²+y²), along y = mx the value is",["m/(1+m²)","m/(1−m²)","0","1/2"],0,"Depends on m ⇒ limit does not exist."],
  ["lim (x,y)→(0,0) of x²y/(x²+y²) is",["0","1","does not exist","1/2"],0,"|x²y/(x²+y²)| ≤ |y| → 0."],
  ["Which is NOT needed for continuity at (a,b)?",["f is defined at (a,b)","the limit exists","limit = f(a,b)","f is differentiable at (a,b)"],3,"Differentiability is stronger than continuity."],
  ["f = 3xy/(x²+y²), f(0,0) = 0, is at (0,0)",["discontinuous","continuous","continuous only along x-axis","differentiable"],0,"Limit along y = mx is 3m/(1+m²), depends on m."]
 ]},
 {id:"u2t2", t:"Euler's theorem", notes:"Q22–Q25",
  k:"If u is homogeneous of degree n: x·uₓ + y·uᵧ = n·u. Second order: x²uₓₓ + 2xy·uₓᵧ + y²uᵧᵧ = n(n−1)u.",
  qs:[
  ["If u is homogeneous of degree n in x, y then x·uₓ + y·uᵧ equals",["n·u","(n−1)·u","n(n−1)·u","u/n"],0,"Euler's theorem."],
  ["The degree of homogeneity of (x + 2y + 3z)/(x³ + y³ + z³) is",["−2","2","1","−3"],0,"1 − 3 = −2."],
  ["If u = sin⁻¹[(x+2y+3z)/(x³+y³+z³)], then x·uₓ + y·uᵧ + z·u_z equals",["−2 tan u","2 tan u","−2 sin u","−2 cot u"],0,"With w = sin u: Σx·w_x = −2w → cos u·Σ = −2 sin u."],
  ["For u homogeneous of degree n, x²uₓₓ + 2xy·uₓᵧ + y²uᵧᵧ equals",["n(n−1)u","n²u","n·u","(n+1)u"],0,"Apply Euler twice."],
  ["θ = tⁿ·e^(−r²/4t) satisfies (1/r²)∂/∂r(r²∂θ/∂r) = ∂θ/∂t when n =",["−3/2","3/2","−1/2","−1"],0,"Compare t^(n−1) terms: −3/2 = n."]
 ]},
 {id:"u2t3", t:"Composite functions", notes:"Q26–Q27",
  k:"Chain rule: u = f(p,q,r) with p,q,r functions of x,y,z → ∂u/∂x = u_p·p_x + u_q·q_x + u_r·r_x.",
  qs:[
  ["If u = u(p,q,r), p = eˣ⁻ʸ, q = eʸ⁻ᶻ, r = eᶻ⁻ˣ, then uₓ + uᵧ + u_z equals",["0","1","u","eˣ"],0,"Each of p, q, r has derivatives that cancel when summed."],
  ["If u = f(x−y, y−z, z−x), then uₓ + uᵧ + u_z equals",["0","1","u","3"],0,"Each argument is unchanged by shifting x, y, z together."],
  ["If u = f(y/x, z/x), then x·uₓ + y·uᵧ + z·u_z equals",["0","u","2u","1"],0,"u is homogeneous of degree 0 → Euler gives 0."],
  ["If u = f((y−x)/xy, (z−x)/zx), then x²uₓ + y²uᵧ + z²u_z equals",["0","u","x+y+z","1"],0,"Arguments are 1/x−1/y and 1/x−1/z; the operator kills both."],
  ["If u = x² + y², x = cos t, y = sin t, then du/dt equals",["0","1","2","−1"],0,"u = 1 constant."]
 ]},
 {id:"u2t4", t:"Jacobians & functional dependence", notes:"Q28–Q33",
  k:"J = ∂(u,v)/∂(x,y) = det of partials. Dependent ⇔ J = 0. J(u,v/x,y)·J(x,y/u,v) = 1.",
  qs:[
  ["For x = r cosθ, y = r sinθ, ∂(x,y)/∂(r,θ) equals",["r","r²","1","r sinθ"],0,"cosθ·r cosθ + sinθ·r sinθ = r."],
  ["For spherical coordinates, ∂(x,y,z)/∂(r,θ,φ) equals",["r² sinθ","r sinθ","r² cosθ","r³ sinθ"],0,"Standard result."],
  ["If u = (x+y)/(1−xy), v = tan⁻¹x + tan⁻¹y, then",["u = tan v (they are dependent)","u and v are independent","u = sin v","u = v²"],0,"J = 0 and tan v = u."],
  ["J(u,v / x,y) × J(x,y / u,v) equals",["1","0","−1","J²"],0,"Jacobians of inverse transformations multiply to 1."],
  ["If u = x²+y²+z², v = x+y+z, w = xy+yz+zx, the relation is",["v² = u + 2w","u = v + w","v² = u − 2w","w² = uv"],0,"(x+y+z)² = Σx² + 2Σxy."]
 ]},
 {id:"u2t5", t:"Taylor's theorem (two variables)", notes:"Q34–Q38",
  k:"f(a+h,b+k) = f + (h·fₓ + k·fᵧ) + (1/2!)(h²fₓₓ + 2hk·fₓᵧ + k²fᵧᵧ) + …",
  qs:[
  ["The second-order term of Taylor's series in two variables is",["(1/2!)(h²fₓₓ + 2hk·fₓᵧ + k²fᵧᵧ)","(1/2!)(h²fₓₓ + hk·fₓᵧ + k²fᵧᵧ)","h²fₓₓ + k²fᵧᵧ","(1/2)(hfₓ + kfᵧ)"],0,"It is (1/2!)(h∂ₓ + k∂ᵧ)²f."],
  ["For f = x² + xy − y², f(1, −2) equals",["−5","5","−3","0"],0,"1 − 2 − 4 = −5."],
  ["For f = x² + xy − y², fᵧ(1, −2) equals",["5","−5","0","2"],0,"fᵧ = x − 2y = 1 + 4 = 5."],
  ["Up to second degree, e^(x+y) at (0,0) is",["1 + (x+y) + (x+y)²/2","1 + (x+y) + (x+y)²","1 + x + y + xy","(x+y) + (x+y)²/2"],0,"Every derivative of e^(x+y) at 0 equals 1."],
  ["For f = x³ + 3x²y + 4xy² + y³, fₓ(1,1) equals",["13","11","14","9"],0,"fₓ = 3x² + 6xy + 4y² = 3 + 6 + 4."]
 ]},
 {id:"u2t6", t:"Maxima, minima & Lagrange", notes:"Q39–Q41",
  k:"Stationary: fₓ = fᵧ = 0. With r = fₓₓ, s = fₓᵧ, t = fᵧᵧ: rt−s²>0 & r>0 → min; rt−s²>0 & r<0 → max; rt−s²<0 → saddle. Lagrange: F = f + λφ.",
  qs:[
  ["rt − s² > 0 and r < 0 indicates a",["maximum","minimum","saddle point","test fails"],0,"Positive discriminant with r < 0."],
  ["For f = x³ − 4xy + 2y², the stationary points are",["(0,0) and (4/3, 4/3)","(0,0) and (2,2)","(1,1) and (4/3, 4/3)","(0,0) and (4/3, 0)"],0,"3x² = 4y and y = x → x = 0 or 4/3."],
  ["For that f at (0,0): rt − s² = 0·4 − 16 = −16, so the point is",["neither maximum nor minimum","a minimum","a maximum","a point of inflection"],0,"Negative discriminant → saddle."],
  ["The minimum value of x³ − 4xy + 2y² is",["−32/27","32/27","−16/9","0"],0,"At (4/3, 4/3): 64/27 − 64/9 + 32/9 = −32/27."],
  ["Minimum of x² + y² + z² subject to ax + by + cz = p is",["p²/(a²+b²+c²)","p/(a²+b²+c²)","p²","(a²+b²+c²)/p²"],0,"Lagrange gives x = ap/S, etc.; sum of squares = p²/S."]
 ]}
]},

{id:"u3", n:"Unit 3", t:"Integral Calculus", e:"∫", c:"#5be3a4", topics:[
 {id:"u3t1", t:"Gamma & Beta type integrals", notes:"Q42",
  k:"∫₀^∞ xⁿe⁻ˣdx = Γ(n+1). ∫₀^∞ x^m e^(−ax^n) dx = (1/n)·Γ((m+1)/n)/a^((m+1)/n). Γ(½) = √π.",
  qs:[
  ["∫₀^∞ xⁿ e⁻ˣ dx equals",["Γ(n+1)","Γ(n)","n!·Γ(n)","1/Γ(n+1)"],0,"Definition of the Gamma function."],
  ["Γ(1/2) equals",["√π","π","1","2√π"],0,"Standard value."],
  ["∫₀^∞ e^(−x⁴) dx equals",["Γ(1/4)/4","Γ(1/2)/4","Γ(1/4)","4Γ(1/4)"],0,"Put x⁴ = t: (1/4)∫t^(−3/4)e⁻ᵗdt = Γ(1/4)/4."],
  ["∫₀¹ x⁴ (log x)⁴ dx equals",["24/3125","24/625","1/3125","4/625"],0,"(−1)ⁿ n!/(m+1)ⁿ⁺¹ = 4!/5⁵."],
  ["∫₀^∞ x⁷/7ˣ dx equals",["Γ(8)/(log 7)⁸","Γ(7)/(log 7)⁷","Γ(8)/(log 7)⁷","Γ(8)·(log 7)⁸"],0,"Put 7ˣ = eᵗ so x = t/log 7."]
 ]},
 {id:"u3t2", t:"Curve tracing", notes:"Q43–Q48",
  k:"Checklist: symmetry → origin → tangents at origin → axis intersections → asymptotes → region of existence → sketch. Polar: symmetry, pole, table of (θ, r), tan φ = r·dθ/dr.",
  qs:[
  ["The cissoid y²(2a − x) = x³ is symmetric about the",["x-axis","y-axis","both axes","neither axis"],0,"Only even powers of y appear."],
  ["At the origin, y²(2a − x) = x³ has coincident tangents y = 0, so the origin is a",["cusp","node","conjugate point","ordinary point"],0,"Coincident tangents mean a cusp."],
  ["For y²(a+x) = x²(a−x), the tangents at the origin are",["y = ±x","y = 0 only","x = 0 only","y = ±2x"],0,"Least-degree terms: a(y² − x²) = 0."],
  ["Does the limaçon r = a + b cosθ (a > b) pass through the pole?",["No, cosθ = −a/b is impossible","Yes, at θ = 0","Yes, at θ = π","Only when a = 0"],0,"|−a/b| > 1, so no real θ."],
  ["For y²(a²+x²) = x²(a²−x²), the region of existence is",["−a ≤ x ≤ a","x ≥ a","x ≤ −a","all real x"],0,"Need a² − x² ≥ 0 for y² ≥ 0."]
 ]},
 {id:"u3t3", t:"Area of curves", notes:"Q49–Q51",
  k:"Cartesian A = ∫y dx. Polar A = ½∫r² dθ. Use symmetry and Beta/Wallis for trig powers.",
  qs:[
  ["The area of the loop of ay² = x²(a − x) is",["8a²/15","4a²/15","2a²/5","πa²/4"],0,"A = 2∫₀ᵃ x√((a−x)/a) dx = 8a²/15."],
  ["The area enclosed by a²x² = y³(2a − y) is",["πa²","2πa²","πa²/2","3πa²/2"],0,"Beta integral evaluates to πa²."],
  ["Polar area formula is",["½∫r² dθ","∫r² dθ","½∫r dθ","∫r dr"],0,"Sector area element ½r²dθ."],
  ["The area of the cardioid r = a(1 − cosθ) is",["3πa²/2","πa²","3πa²/4","2πa²"],0,"2 × ½∫₀^π a²(1−cosθ)² dθ."],
  ["The area of the lemniscate r² = a² cos2θ is",["a²","πa²","a²/2","2a²"],0,"4 × ½∫₀^(π/4) a² cos2θ dθ = a²."]
 ]},
 {id:"u3t4", t:"Length of curves", notes:"Q52–Q54",
  k:"Cartesian L = ∫√(1+y₁²)dx. Polar L = ∫√(r²+r₁²)dθ. Parametric L = ∫√(ẋ²+ẏ²)dt.",
  qs:[
  ["Arc length in Cartesian form is",["∫√(1 + (dy/dx)²) dx","∫(1 + dy/dx) dx","∫√(1 + dy/dx) dx","∫y√(1+y₁²) dx"],0,"Standard formula."],
  ["Length of ay² = x³ from the origin to (a, a) is",["(a/27)(13√13 − 8)","(a/27)(13√13 + 8)","8a/27","a√2"],0,"L = ∫₀ᵃ √(1 + 9x/4a) dx."],
  ["Polar arc length is",["∫√(r² + (dr/dθ)²) dθ","∫√(1 + r²) dθ","∫r dθ","∫√(r² − r₁²) dθ"],0,"Standard formula."],
  ["The perimeter of the cardioid r = a(1 + cosθ) is",["8a","4a","2πa","6a"],0,"ds = 2a·cos(θ/2)dθ; total = 8a."],
  ["Length of y = (2/3)x^(3/2) from x = 0 to 3 is",["14/3","7/3","28/3","2"],0,"1 + y′² = 1 + x → (2/3)(8 − 1) = 14/3."]
 ]}
]},

{id:"u4", n:"Unit 4", t:"Multiple Integrals & Applications", e:"🧊", c:"#ff8fa3", topics:[
 {id:"u4t1", t:"Double/triple integrals & change of order", notes:"Q55–Q57",
  k:"Sketch the region, swap the limits, integrate the easier order first. Polar: dx dy = r dr dθ.",
  qs:[
  ["∫₀ᵃ∫₀^√(a²−y²)(a² − x² − y²) dx dy equals",["πa⁴/8","πa²/8","πa⁴/4","πa⁴/16"],0,"Polar: (π/2)(a⁴/2 − a⁴/4) = πa⁴/8."],
  ["∫₀¹∫₀^√(1−x²)∫₀^√(1−x²−y²) xyz dz dy dx equals",["1/48","1/24","1/16","1/8"],0,"Polar: ∫sinθcosθ dθ = 1/2 and ∫r³(1−r²)/2 dr = 1/24, so 1/48."],
  ["∫₀^∞∫ₓ^∞ (e⁻ʸ/y) dy dx equals",["1","0","∞","e"],0,"Swap: ∫₀^∞ (e⁻ʸ/y)·y dy = 1."],
  ["∫₀¹∫_{4y}^4 e^(x²) dx dy equals",["(e¹⁶ − 1)/8","(e¹⁶ − 1)/4","e¹⁶/8","(e⁴ − 1)/8"],0,"Swap: ∫₀⁴ (x/4)e^(x²) dx."],
  ["For y from x²/4a to 2√(ax), x from 0 to 4a, the reversed order is",["y: 0→4a, x: y²/4a → 2√(ay)","y: 0→4a, x: 2√(ay) → y²/4a","y: 0→2a, x: y²/4a → 2√(ay)","y: 0→4a, x: 0 → y"],0,"x²=4ay ⇒ x = 2√(ay); y²=4ax ⇒ x = y²/4a."]
 ]},
 {id:"u4t2", t:"Volume of revolution", notes:"Q58–Q60",
  k:"About x-axis: V = π∫y²dx. About y-axis: V = π∫x²dy. Polar: V = (2π/3)∫r³sinθ dθ (about initial line).",
  qs:[
  ["Volume when y = f(x) revolves about the x-axis is",["π∫y² dx","2π∫y dx","π∫x² dy","∫π y dx"],0,"Stack of discs."],
  ["Parabola y² = 4ax cut by the latus rectum, revolved about the tangent at the vertex, gives",["4πa³/5","8πa³/5","2πa³/5","πa³/5"],0,"V = 2π∫₀^(2a) y⁴/(16a²) dy."],
  ["The loop of 3ay² = x(x−a)² revolved about the x-axis gives",["πa³/36","πa³/12","πa³/3","2πa³/9"],0,"V = π∫₀ᵃ x(x−a)²/(3a) dx."],
  ["A sphere of radius a has volume",["4πa³/3","4πa²","2πa³/3","πa³"],0,"Rotate a semicircle."],
  ["The ellipse x²/a² + y²/b² = 1 revolved about the x-axis gives volume",["4πab²/3","4πa²b/3","2πab²/3","πab²"],0,"V = 2π∫₀ᵃ b²(1 − x²/a²) dx."]
 ]},
 {id:"u4t3", t:"Surface area of revolution", notes:"Q61–Q63",
  k:"About x-axis: S = 2π∫y·ds. About y-axis: S = 2π∫x·ds. Polar (initial line): S = 2π∫r sinθ √(r²+r₁²) dθ.",
  qs:[
  ["Polar surface area about the initial line is",["2π∫ r sinθ √(r²+r₁²) dθ","2π∫ r cosθ √(r²+r₁²) dθ","π∫ r² sinθ dθ","2π∫ r √(1+r₁²) dθ"],0,"y = r sinθ and ds = √(r²+r₁²)dθ."],
  ["y = x² for 0 ≤ y ≤ 3 revolved about the y-axis has surface area",["(π/6)(13√13 − 1)","(π/6)(37√37 − 1)","(π/3)(13√13 − 1)","13π/6"],0,"S = 2π∫₀^√3 x√(1+4x²) dx."],
  ["The cardioid r = a(1 + cosθ) revolved about the initial line has surface area",["32πa²/5","16πa²/5","8πa²/3","4πa²"],0,"Standard result."],
  ["The surface area of a sphere of radius a is",["4πa²","2πa²","πa²","4πa³/3"],0,"Rotate a semicircle."],
  ["y = x, 0 ≤ x ≤ 1, revolved about the x-axis has surface area",["√2·π","2π","π√2/2","π"],0,"2π∫₀¹ x√2 dx."]
 ]},
 {id:"u4t4", t:"Area by double integration", notes:"Q64–Q68",
  k:"A = ∬dy dx (Cartesian) or ∬r dr dθ (polar). Find intersection points first to fix the limits.",
  qs:[
  ["The area between y² = 4ax and x² = 4ay is",["16a²/3","8a²/3","4a²/3","a²"],0,"∫₀^(4a)(2√(ax) − x²/4a) dx."],
  ["The area between y = 4x − x² and y = x is",["9/2","27/2","9","3"],0,"∫₀³ (3x − x²) dx."],
  ["The area element in polar coordinates is",["r dr dθ","dr dθ","r² dr dθ","dr dθ / r"],0,"Jacobian of polar transformation."],
  ["The area inside r = a sinθ and outside r = a(1 − cosθ) is",["a²(1 − π/4)","a²(π/4 − 1)","πa²/4","a²(π/2 − 1)"],0,"½∫₀^(π/2)[sin²θ − (1−cosθ)²]dθ = 1 − π/4 (positive)."],
  ["The area common to the cardioids r = a(1+cosθ) and r = a(1−cosθ) is",["a²(3π/2 − 4)","a²(3π/2 + 4)","3πa²/2","a²(π − 2)"],0,"4 × ½∫₀^(π/2) a²(1−cosθ)² dθ."]
 ]},
 {id:"u4t5", t:"Volume by double/triple integration", notes:"Q69–Q71",
  k:"V = ∬z dy dx under a surface, or ∭dz dy dx. Use symmetry and polar/elliptic substitutions.",
  qs:[
  ["Volume under z = f(x,y) over a region R is",["∬ f(x,y) dy dx","∬ dy dx","∭ f dz","∬ f² dy dx"],0,"Sum of columns of height z."],
  ["The volume bounded by 4z = 16 − 4x² − y² and z = 0 is",["16π","8π","32π","64π/3"],0,"Substitute u = 2x, use polar: (1/8)(2π)(64)."],
  ["The volume inside x² + y² = 4 between z = 0 and y + z = 4 is",["16π","8π","32π","4π"],0,"∬(4 − y)dA = 4 × area = 16π."],
  ["The volume of an ellipsoid x²/a² + y²/b² + z²/c² = 1 is",["4πabc/3","4πabc","2πabc/3","πabc"],0,"Scale a unit sphere."],
  ["The volume of the tetrahedron x, y, z ≥ 0, x + y + z ≤ 1 is",["1/6","1/3","1/2","1/8"],0,"∫₀¹∫₀^(1−x)(1 − x − y) dy dx."]
 ]},
 {id:"u4t6", t:"Centre of gravity", notes:"Q72",
  k:"x̄ = ∬xρ dA / ∬ρ dA, ȳ = ∬yρ dA / ∬ρ dA. Polar: use r cosθ, r sinθ and dA = r dr dθ.",
  qs:[
  ["The x-coordinate of the centre of gravity of a lamina is",["∬xρ dA / ∬ρ dA","∬ρ dA / ∬xρ dA","∬x dA","∬x²ρ dA / ∬ρ dA"],0,"Moment about the y-axis over total mass."],
  ["For a quadrant of x²/a² + y²/b² = 1 with density ρ = kxy, x̄ equals",["8a/15","4a/3π","2a/3","a/2"],0,"∫x²(a²−x²)dx / ∫x(a²−x²)dx = (2a⁵/15)/(a⁴/4)."],
  ["In polar form, x̄ equals",["∬ r cosθ·ρ r dr dθ / ∬ ρ r dr dθ","∬ r cosθ·ρ dr dθ / ∬ ρ dr dθ","∬ r²ρ dr dθ / ∬ ρ dr dθ","∬ cosθ·ρ dr dθ / ∬ ρ dr dθ"],0,"Include r from the area element."],
  ["The centroid of a uniform semicircular lamina of radius a lies at ȳ =",["4a/3π","2a/π","a/2","3a/8"],0,"Standard result."],
  ["For a lamina symmetric about an axis, the centre of gravity",["lies on that axis","is at the origin","is outside the lamina","depends only on density"],0,"Symmetry forces the moment on the other side to cancel."]
 ]}
]},

{id:"u5", n:"Unit 5", t:"Vector Calculus", e:"🧭", c:"#c9a7ff", topics:[
 {id:"u5t1", t:"Gradient, directional derivative & motion", notes:"Q73–Q82",
  k:"∇φ = φₓi + φᵧj + φ_zk, normal to φ = c. Directional derivative = ∇φ·â. Velocity = dr/dt, acceleration = d²r/dt².",
  qs:[
  ["A unit normal to the surface φ(x,y,z) = c is",["∇φ / |∇φ|","∇×φ","φ / |φ|","∇·φ"],0,"∇φ is perpendicular to level surfaces."],
  ["The directional derivative of x² + y² + z² at (1,2,3) along i + j + k is",["4√3","12","4/√3","6√3"],0,"∇φ = (2,4,6); dot (1,1,1)/√3 = 12/√3."],
  ["If r = xi + yj + zk and r = |r|, then ∇rⁿ equals",["n rⁿ⁻² r","n rⁿ⁻¹ r","rⁿ⁻² r","n rⁿ r"],0,"∂rⁿ/∂x = n rⁿ⁻¹·x/r."],
  ["A unit normal to xy³z² = 4 at (−1,−1,2) is",["(−i − 3j + k)/√11","(i − 3j + k)/√11","(−i − 3j + k)/√13","(i + 3j − k)/√13"],0,"∇φ = (y³z², 3xy²z², 2xy³z) = (−4, −12, 4)."],
  ["r = (t³+1)i + t²j + (2t+3)k. The component of velocity at t = 1 along i + j + 3k is",["√11","11","8/√11","3√11"],0,"v = 3i+2j+2k; (3+2+6)/√11 = √11."]
 ]},
 {id:"u5t2", t:"Divergence & curl", notes:"Q83–Q87",
  k:"div F = ∂F₁/∂x + ∂F₂/∂y + ∂F₃/∂z. curl F = ∇×F (determinant). Solenoidal: div F = 0. Irrotational: curl F = 0.",
  qs:[
  ["If r = xi + yj + zk, then ∇·r equals",["3","0","r","1"],0,"1 + 1 + 1."],
  ["If r = xi + yj + zk, then ∇×r equals",["0","3","r","i + j + k"],0,"All mixed partials cancel."],
  ["For F = (x²−y²)i + 2xy j + (y²−xz)k, div F equals",["3x","2x","x","4x − z"],0,"2x + 2x − x = 3x."],
  ["For F = (y+z)i + (z+x)j + (x+y)k, curl F equals",["0","i + j + k","2(i + j + k)","−(i + j + k)"],0,"Each component difference is 1 − 1 = 0."],
  ["A vector field is solenoidal when",["∇·F = 0","∇×F = 0","∇φ = F","F = 0"],0,"Zero divergence."]
 ]},
 {id:"u5t3", t:"Del applied twice", notes:"Q88–Q89",
  k:"div curl F = 0, curl grad φ = 0, curl curl F = ∇(∇·F) − ∇²F, ∇²φ = φₓₓ + φᵧᵧ + φ_zz.",
  qs:[
  ["div(curl F) equals",["0","∇²F","curl F","F"],0,"Always zero."],
  ["curl(grad φ) equals",["0","∇²φ","grad φ","φ"],0,"Mixed partials are equal."],
  ["∇²(x² + y² + z²) equals",["6","3","2","0"],0,"2 + 2 + 2."],
  ["curl(curl F) equals",["∇(∇·F) − ∇²F","∇²F − ∇(∇·F)","∇(∇×F)","∇²F"],0,"Standard identity."],
  ["For r ≠ 0, ∇²(1/r) in three dimensions equals",["0","1/r³","−1/r²","2/r³"],0,"∇²rⁿ = n(n+1)rⁿ⁻² and n = −1 gives 0."]
 ]},
 {id:"u5t4", t:"Vector, surface & volume integrals", notes:"Q90–Q93",
  k:"∫R dt is done component-wise. Surface: ∬F·n̂ dS with dS = dx dy / |n̂·k̂|. Volume: ∭ f dV.",
  qs:[
  ["If R = (3t²−t)i + (2−6t)j − 4t k, then ∫R dt equals",["(t³ − t²/2)i + (2t − 3t²)j − 2t²k + C","(t³ − t)i + (2t − 6t²)j − 4t²k + C","(6t − 1)i − 6j − 4k + C","(t³ − t²/2)i + (2t − 6t²)j − 4t²k + C"],0,"Integrate each component separately."],
  ["∬(yz i + zx j + xy k)·n̂ dS over the sphere x²+y²+z²=1 in the first octant equals",["3/8","3/4","1/8","3/2"],0,"F·n̂ = 3xyz; spherical coordinates give 3 × 1/4 × 1/2."],
  ["∭ 2x dV over the tetrahedron x, y, z ≥ 0, x + y + z ≤ 2 equals",["4/3","8/3","2/3","16/3"],0,"∫₀² x(2−x)² dx = 4/3."],
  ["∫₀² (t i + t² j) dt equals",["2i + (8/3)j","i + j","4i + 8j","2i + 2j"],0,"∫t = 2, ∫t² = 8/3."],
  ["Projecting onto the xy-plane, dS equals",["dx dy / |n̂·k̂|","dx dy · |n̂·k̂|","dx dy","dx dy / |n̂·i|"],0,"Standard projection formula."]
 ]},
 {id:"u5t5", t:"Gauss, Stokes & Green theorems", notes:"Q94–Q98",
  k:"Gauss: ∬F·n̂ dS = ∭∇·F dV. Stokes: ∮F·dr = ∬(∇×F)·n̂ dS. Green: ∮(F₁dx + F₂dy) = ∬(∂F₂/∂x − ∂F₁/∂y) dx dy.",
  qs:[
  ["For any closed surface S enclosing volume V, with F = xi + 2yj + 3zk, ∬F·n̂ dS equals",["6V","3V","V","0"],0,"div F = 1 + 2 + 3 = 6."],
  ["∬ r·n̂ dS over the sphere x²+y²+z² = 9 equals",["108π","36π","54π","324π"],0,"div r = 3 and V = 36π."],
  ["∬(ax i + by j + cz k)·n̂ dS over the unit sphere equals",["4π(a+b+c)/3","4π(a+b+c)","(a+b+c)/3","4π/3"],0,"(a+b+c) × volume 4π/3."],
  ["Stokes' theorem states",["∮F·dr = ∬(∇×F)·n̂ dS","∮F·dr = ∬(∇·F) dS","∬F·n̂ dS = ∭∇·F dV","∮F·dr = ∭∇×F dV"],0,"Line integral equals flux of the curl."],
  ["Green's theorem states ∮(F₁dx + F₂dy) =",["∬(∂F₂/∂x − ∂F₁/∂y) dx dy","∬(∂F₁/∂y − ∂F₂/∂x) dx dy","∬(∂F₁/∂x + ∂F₂/∂y) dx dy","∬(F₁ + F₂) dx dy"],0,"Circulation over the boundary equals the curl over the region."]
 ]}
]}
];
