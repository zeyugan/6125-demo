import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "public", "data.json"); // JSON 文件路径

// GET 方法：读取并返回 data.json 文件中的数据
export async function GET(req) {
    try {
        if (!fs.existsSync(filePath)) {
            // 如果文件不存在，创建默认数据
            const defaultData = {
                user: { creditScore: 750, breakdown: [250, 300, 200], maxBorrowLimit: 5000, maxLendLimit: 2000 },
                borrowBills: [],
            };
            fs.writeFileSync(filePath, JSON.stringify(defaultData, null, 2));
            return new Response(JSON.stringify(defaultData), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        }

        // 读取 JSON 文件
        const rawData = fs.readFileSync(filePath, "utf8");
        const data = JSON.parse(rawData);

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error reading data:", error);
        return new Response(JSON.stringify({ error: "Failed to load data" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

// POST 方法：接收客户端发送的数据并更新 data.json 文件
export async function POST(req) {
    try {
        const { updatedBills } = await req.json();

        // 验证数据格式
        if (!updatedBills || !Array.isArray(updatedBills)) {
            return new Response(JSON.stringify({ error: "Invalid data format: 'updatedBills' must be an array" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        // 读取现有的 data.json 数据
        const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

        // 合并新的借款条目
        const existingBillIds = data.borrowBills.map((bill) => bill.id);
        const mergedBills = [...data.borrowBills];

        updatedBills.forEach((updatedBill) => {
            const index = existingBillIds.indexOf(updatedBill.id);
            if (index >= 0) {
                // 更新现有条目
                mergedBills[index] = { ...mergedBills[index], ...updatedBill };
            } else {
                // 添加新条目
                mergedBills.push(updatedBill);
            }
        });

        // 保存更新后的数据
        const updatedData = {
            user: data.user, // 保持用户数据不变（或根据需求更新）
            borrowBills: mergedBills, // 更新后的借款账单
        };

        fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));

        return new Response(
            JSON.stringify({
                message: "Data updated successfully",
                user: data.user,
                borrowBills: mergedBills,
            }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        console.error("Error updating data:", error);
        return new Response(JSON.stringify({ error: "Failed to update data" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}