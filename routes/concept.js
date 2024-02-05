const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const pool = require("../db/conn"); // 데이터베이스 연결 모듈 가져오기
const cookieParser = require("cookie-parser");
router.use(cookieParser());

// 토큰이 유효한지 확인하는 함수
const verifyToken = (req, res, next) => {
  const token = req.cookies.jwtToken; // 수정된 부분

  if (!token) {
    return res.status(401).json({ error: "인증 토큰이 없습니다." });
  }

  // JWT 토큰 검증
  try {
    const decodedToken = jwt.verify(token, "your_secret_key");
    req.user = { ...decodedToken, user_id: decodedToken.userId.toString() };
    next();
  } catch (err) {
    console.error("JWT 검증 오류:", err);
    return res.status(401).json({ error: "유효하지 않은 토큰입니다." });
  }
};

// 개념 포스트잇 POST API 생성
// POST /concept
router.post("/", verifyToken, async (req, res) => {
  try {
    const { importance, description } = req.body;
    const user_id = req.user.user_id;

    // Concept을 데이터베이스에 추가
    const result = await pool.query(
      "INSERT INTO Concept (user_id, importance, description) VALUES (?, ?, ?)",
      [user_id, importance, description.toString()]
    );

    // 새로 생성된 Concept의 정보를 응답으로 반환
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 개념 리스트 GET API 생성
// get /concept/list
router.get("/list", verifyToken, async (req, res) => {
  try {
    const user_id = req.user.user_id;

    // 데이터베이스 풀에서 연결 얻기
    const conn = await pool.getConnection();

    // 데이터베이스에서 데이터 조회
    const results = await conn.query(
      "SELECT * FROM Concept WHERE user_id = ?",
      [user_id]
    );

    if (results.length === 0) {
      // 해당 user_id에 대한 데이터가 없을 경우
      res.status(404).json({ error: "데이터를 찾을 수 없습니다." });
    } else {
      // 조회된 데이터를 배열로 묶어서 JSON 응답으로 반환
      const data = results.map((result) => ({
        description: result.description,
      }));
      res.json(data);
    }

    conn.release(); // 연결 반환
  } catch (error) {
    console.error("데이터 조회 오류:", error);
    res.status(500).json({ error: "데이터 조회 오류" });
  }
});

// 개념 포스트잇 중요도 태그 별 GET API
// get /concept/importance:importance
router.get("/importance", verifyToken, async (req, res) => {
  try {
    const { user_id } = req.user;
    const { importance } = req.query;

    // 데이터베이스 풀에서 연결 얻기
    const conn = await pool.getConnection();

    // 데이터베이스에서 데이터 조회
    const results = await conn.query(
      "SELECT * FROM Concept WHERE user_id = ? AND importance = ?",
      [user_id, importance]
    );

    if (results.length === 0) {
      // 해당 조건에 맞는 데이터가 없을 경우
      res.status(404).json({ error: "데이터를 찾을 수 없습니다." });
    } else {
      // 조회된 데이터를 배열로 묶어서 JSON 응답으로 반환
      const data = results.map((result) => ({
        description: result.description,
      }));
      res.json(data);
    }

    conn.release(); // 연결 반환
  } catch (error) {
    console.error("데이터 조회 오류:", error);
    res.status(500).json({ error: "데이터 조회 오류" });
  }
});

// 개념 중요도 별로 내림차순, 오름차순
// get /concept/sort:order
router.get("/sort", verifyToken, async (req, res) => {
  try {
    const { user_id } = req.user;
    const { order } = req.query;

    // 데이터베이스 풀에서 연결 얻기
    const conn = await pool.getConnection();

    // 데이터베이스에서 데이터 조회
    const sqlQuery = `SELECT * FROM Concept WHERE user_id = ? ORDER BY importance ${
      order === "asc" ? "ASC" : "DESC"
    }`;
    const results = await conn.query(sqlQuery, [user_id]);

    if (results.length === 0) {
      // 해당 조건에 맞는 데이터가 없을 경우
      res.status(404).json({ error: "데이터를 찾을 수 없습니다." });
    } else {
      // 조회된 데이터를 배열로 묶어서 JSON 응답으로 반환
      const data = results.map((result) => ({
        description: result.description,
      }));
      res.json(data);
    }

    conn.release(); // 연결 반환
  } catch (error) {
    console.error("데이터 조회 오류:", error);
    res.status(500).json({ error: "데이터 조회 오류" });
  }
});

module.exports = router;
